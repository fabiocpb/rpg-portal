<template>
    <Teleport to="body">
        <div v-if="menupostar" @click="ativarPostar" class="fixed z-10 top-0 bottom-0 left-0 right-0 w-screen"></div>
    </Teleport>
    <div v-if="!menupostar" class="mt-2 flex flex-row items-center justify-center rounded-full shadow-md border-2 border-blue-500/20 bg-slate-50">
        <img class="flex w-2/12 m-2 border border-blue-500 rounded-full" :src="usuario.profimg" alt="">
        <button class="flex p-0 w-full mx-auto text-xl font-bold text-white text-center" @click="ativarPostar"><input type="text" class="w-full mr-2 bg-slate-200 border-none py-1 rounded-full" placeholder=" Qual seu jogo favorito?" readonly></button>
    </div>
    <form v-if="menupostar" class="z-20 border p-2 mt-2 shadow-md bg-slate-50" @submit.prevent="criarPost">
        <div class="flex flex-col">
            <label for="titulo">Título:</label>
            <input type="text" id="titulo" v-model.trim="titulo.valor">
            <p v-if="!titulo.valido" class="text-red-700">Digite um título.</p>
        </div>
        <div class="flex flex-col">
            <label for="texto">Conteudo:</label>
            <!-- <textarea class="border border-black" v-model.trim="conteudo.valor"></textarea> -->
            <EmojiPicker id="texto" class="border border-black" 
            native="false" 
            hide-group-names 
            display-recent="true"
            :static-texts="{ placeholder: 'Buscar Emoji', skinTone: 'Tons de pele'}" 
            :group-names="gruposEmojis" 
            pickerType="textarea" 
            @update:text="atualizarTextoEmoji"/>
            <p v-if="!conteudo.valido" class="text-red-700">Digite um texto.</p>
        </div>
        <div class="flex flex-col items-start">
            <img id="image" :src="imgpreview" class="block mx-auto shadow-md" :class="tamanhoFoto" @click.prevent="showFileChooser">
            <div class="flex flex-row items-center justify-start">
                <label for="">Imagem:</label>
                <v-icon name="fc-add-image" scale="2" hover="true" animation="float" @click="showFileChooser"/>
                <!-- <button class="bg-blue-500 w-full p-2 text-white font-bold rounded-md mt-2 ml-2" type="button" @click="showFileChooser">ESCOLHER IMAGEM</button> -->
                <input  type="file" ref="input" name="imagem" id="imagem" @change="uploadImagem($event)" class="hidden">
            </div>
            
        </div>
        <div class="flex flex-row justify-center mx-auto">
           <button class="bg-blue-500 w-full p-2 text-white font-bold rounded-md mt-2 mx-1" type="submit">POSTAR</button>
           <button class="bg-white w-full p-2 text-black font-bold rounded-md mt-2 mx-1 border" type="reset">LIMPAR</button>
           <button class="bg-red-500 w-full p-2 text-white font-bold rounded-md mt-2 mx-1" type="button" @click="ativarPostar">CANCELAR</button>
        </div>
    </form>
</template>

<script>
import EmojiPicker from 'vue3-emoji-picker'
import {mapWritableState, mapActions} from 'pinia'
import usePostsStore from '../../stores/posts'
export default {
    components: {
        EmojiPicker
    },
    props: ['usuario', 'profimg'],
    emits: ['fechar'],
    data(){
        return {
            titulo: {
                valor: '',
                valido: true
            },
            conteudo: {
                valor: '',
                valido: true
            },
            imagem: {
                valor: '',
                valido: true
            },
            postValido: true,
            menupostar: false,
            tamanhoFoto: '',
            imgpreview: '',
            gruposEmojis: {
                "smileys_people": "Pessoas",
                "animals_nature": "Animais e Natureza",
                "food_drink": "Comida",
                "activities": "Atividades",
                "travel_places": "Viagem e Lugares",
                "objects": "Objetos",
                "symbols": "Simbolos",
                "flags": "Bandeiras",
                "recent": "Usados Recentemente"
                }
        }
    },
    computed: {
        ...mapWritableState(usePostsStore, [ 'posts'])
    },
    methods: {
        ...mapActions(usePostsStore, ['criarPost', 'pegarPostsUsuarios']),
        limparValidacao(){
            this.formValido = true;
            this.titulo.valido = true;
            this.conteudo.valido = true;
        },
        validarForm(){
            this.limparValidacao();

            if(this.titulo.valor === ''){
                this.formValido = false;
                this.titulo.valido = false;
            }
            if(this.conteudo.valor === ''){
                this.formValido = false;
                this.conteudo.valido = false;
            }

            return this.formValido;
        },
        atualizarTextoEmoji(text){
            this.conteudo.valor = text;
        },
        tentarFechar(){
            if(this.fixado){
                return;
            }
            this.$emit('fechar');
        },
        criarPost(){
            if(!this.validarForm()){
                return
            }
            let post = {
                id: this.usuario.postsTexto.length++,
                nomeusuario: this.usuario.nome,
                data:  new Date(),
                titulo:  this.titulo.valor,
                content:  this.conteudo.valor,
                imagem: this.imagem.valor
            }
            const store = usePostsStore();
            store.$patch((state) => {
                state.posts.push(post)
                state.posts.sort(function(a, b){
                return new Date(b.data) - new Date(a.data);
            });
            });
            this.menupostar = false
            //this.criarPost(post);
        },
        showFileChooser() {
            this.$refs.input.click();
        },
        validarExtensaoDeImagem(imagem){
                const extensoesPermitidas = ['jpeg','jpg','png','webp'];
                const extensao = imagem.name.split('.').pop().toLowerCase();
                return extensoesPermitidas.indexOf(extensao) !== -1;
            },
        async uploadImagem( event ) {
                let vm = this;

                this.imagem.valida = true;
                this.imagem.valor = event.target.files[0];

                if(this.imagem.valor.size > 200000 || this.imagem.valor.size === 0){
                    //alert("Image OK!");
                    //console.log('tamanho');
                    this.imagem.valida = false;
                    this.formValido = false;
                    return;
                }

                const validarExtensao = this.validarExtensaoDeImagem(this.imagem.valor);

                if(!validarExtensao){
                    this.imagem.valida = false;
                    this.formValido = false;
                    return;
                }

                if(this.imagem.valor){
                    let novaImagem = new Image();

                    novaImagem.src = URL.createObjectURL(this.imagem.valor);

                    novaImagem.onload = function (event) {
                        let w = event.target.width;
                        let h = event.target.height;
                        //this.dirfoto = event.target.src;
                        //console.log(this.dirfoto);
                        // if(w/h > 0.75 && w/h < 0.75){
                        //     vm.imagem.isPropValid = false;
                        //     this.formValido = false;
                        //     prop = false;
                        //     console.log("teste1");
                        // }
                        // if(w > h){
                        //     vm.imagem.isPropValid = false;
                        //     vm.formValido = false;
                        //     prop = false;
                        //     vm.tamanhoFoto = 'w-max'
                        //     //console.log("teste2"); 
                        // }
                        if(w > 354 || h > 472 || w < 170 || h < 226){
                            // vm.imagem.isPropValid = false;
                            // vm.formValido = false;
                            // prop = false;
                            vm.tamanhoFoto = 'w-max'
                            //console.log("teste2"); 
                        }
                        if(w === 354 || w === 170){
                            vm.tamanhoFoto = 'w-3/4'
                        }
                        //console.log("1 " + type, prop, size);
                        //console.log("largura: " + w + ', ' + 'altura: ' + h);
                    }
                }else{
                    this.imgpreview = '';
                    //console.log('não valido');
                    this.imagem.valido = false;
                    this.formValido = false;
                    return;
                }

                //console.log(type, prop, size);

                //this.carregando = true

                setTimeout(()=>{
                    if (typeof FileReader === 'function') {
                        const reader = new FileReader();

                        reader.onload = function (event) {
                            vm.imgpreview = event.target.result;    
                            //vm.carregando = false;
                        };

                        reader.readAsDataURL(this.imagem.valor);
                    } else {
                        alert('API Filereader não suportada.');
                    }
                }, 2000)

            },
        ativarPostar(){
            this.limparValidacao();
            this.titulo.valor = '';
            this.conteudo.valor = '';
            this.menupostar = !this.menupostar;
        }
    }
}
</script>

