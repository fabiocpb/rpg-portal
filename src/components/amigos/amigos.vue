<template>
    <div class="flex flex-col border rounded-lg shadow-md bg-slate-50 mt-2">
        <div class="flex flex-col">
            <p class="flex px-2 pb-0 pt-2 text-lg font-bold h-5">Amigos</p>
            <p class="flex px-2 pb-2 pt-0 border-b-2 text-sm ">{{ lista_amigos.length }} amigos.</p>
        </div>
        <div class="flex flex-row justify-center items-start" >      
            <tokenamigo v-for="amigo in lista_amigos" :key="amigo.id" :nome="amigo.nome" :fotosrc="amigo.profimg"/>
        </div>
    </div>
   
</template>

<script>
import {mapState, mapActions} from 'pinia'
import tokenamigo from '../ui/token-amigo.vue'
import useUserStore from '../../stores/usuario'

export default {
    props: ['id'],
    components: {
        tokenamigo
    },
    data(){
        return {
            lista_amigos: []
        }
    },
    computed: {
        ...mapState(useUserStore, ['usuario', 'lista_usuarios'])
    },
    methods: {
        ...mapActions(useUserStore, ['pegarDadosUsuario']),
        pegarAmigos(){
            for(let j = 0; j <this.lista_usuarios.length; j++){
                for(let i = 0; i < this.usuario[0].amigos.length; i++) {
                    if(this.usuario[0].amigos[i] === this.lista_usuarios[j].id){
                        let amigo = {
                            id: this.lista_usuarios[j].id,
                            nome: this.lista_usuarios[j].nome,
                            profimg: this.lista_usuarios[j].profimg
                        }
                        this.lista_amigos.push(amigo)
                    }
                }
            }
            console.log(this.lista_amigos);
        }
    }, 
    created(){
      this.pegarDadosUsuario(this.id);
      this.pegarAmigos();
      //console.log(this.lista_usuarios[0].amigos[1]);
    }
}
</script>