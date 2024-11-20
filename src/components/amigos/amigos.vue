<template>
    <div class="flex flex-col border rounded-lg shadow-md bg-slate-50 mt-2">
        <div class="flex flex-col">
            <p class="flex px-2 pb-1 pt-2 text-lg font-bold h-5">Amigos</p>
            <p class="flex px-2 pb-2 pt-2 border-b-2 text-[13px] text-gray-500">{{ lista_amigos.length }} amigos.</p>
        </div>
        <div class="flex flex-row justify-center items-start" >      
            <tokenamigo v-for="amigo in lista_amigos" :key="amigo.id" :id="amigo.id" :nome="amigo.nome" :fotosrc="amigo.profimg"/>
        </div>
    </div>
   
</template>

<script>
import {mapState, mapActions} from 'pinia'
import tokenamigo from '../ui/token-amigo.vue'
import useUserStore from '../../stores/usuario'

export default {
    props: ['id', 'modo'],
    components: {
        tokenamigo
    },
    data(){
        return {
            lista_amigos: []
        }
    },
    computed: {
        ...mapState(useUserStore, ['usuarioPublico', 'lista_usuarios', 'idUsuario', 'usuario'])
    },
    methods: {
        ...mapActions(useUserStore, ['pegarDadosUsuario']),
        pegarAmigos(modo){
            if(modo === 'privado'){
                for(let j = 0; j <this.lista_usuarios.length; j++){
                    for(let i = 0; i < this.usuario.amigos.length; i++) {
                        if(this.usuario.amigos[i] === this.lista_usuarios[j].id){
                            let amigo = {
                                id: this.lista_usuarios[j].id,
                                nome: this.lista_usuarios[j].nome,
                                profimg: this.lista_usuarios[j].profimg
                            }
                            this.lista_amigos.push(amigo)
                        }
                    }
                }
            }else {
                for(let j = 0; j <this.lista_usuarios.length; j++){
                    for(let i = 0; i < this.usuarioPublico.amigos.length; i++) {
                        if(this.usuarioPublico.amigos[i] === this.lista_usuarios[j].id){
                            let amigo = {
                                id: this.lista_usuarios[j].id,
                                nome: this.lista_usuarios[j].nome,
                                profimg: this.lista_usuarios[j].profimg
                            }
                            this.lista_amigos.push(amigo)
                        }
                    }
                }
            }
           
            console.log(this.lista_amigos);
        }
    }, 
    created(){
        if(this.modo === 'privado'){
            this.pegarDadosUsuario(this.idUsuario, 'privado');
            this.pegarAmigos(this.modo);
        }else {
            this.pegarDadosUsuario(this.id, 'publico');
            this.pegarAmigos(this.modo);
        }
      
      
      //console.log(this.lista_usuarios[0].amigos[1]);
    },
    updated(){
        if(this.modo === 'privado'){
            this.pegarDadosUsuario(this.idUsuario, 'privado');
            this.lista_amigos = [];
            this.pegarAmigos(this.modo);
        }else {
            this.pegarDadosUsuario(this.id, 'publico');
            this.lista_amigos = [];
            this.pegarAmigos(this.modo);
        }
      //console.log(this.lista_usuarios[0].amigos[1]);
    }
}
</script>