<template>
    <div class="flex flex-col border rounded-lg shadow-md bg-slate-50 mt-2 w-full">
        <div class="flex flex-col">
            <p class="flex px-2 pb-0 pt-2 text-lg font-bold h-5">Mesas</p>
            <p class="flex px-2 pb-2 pt-0 border-b-2 text-sm ">{{ lista_mesas.length }} mesas.</p>
        </div>
        <div class="flex flex-col justify-center items-start pl-4 pt-3" >      
            <bannermesa class="" v-for="mesa in lista_mesas" :key="mesa.id" :nomemesa="mesa.nome" :sistema="mesa.sistema" :mesasrc="mesa.imgmesa"/>
        </div>
    </div>
   
</template>

<script>
import {mapState, mapActions} from 'pinia'
import bannermesa from '../ui/banner-mesa.vue'
import useUserStore from '../../stores/usuario'

export default {
    props: ['id'],
    components: {
        bannermesa
    },
    data(){
        return {
            lista_mesas: []
        }
    },
    computed: {
        ...mapState(useUserStore, ['usuario', 'lista_usuarios'])
    },
    methods: {
        ...mapActions(useUserStore, ['pegarDadosUsuario']),
        pegarMesas(){
            for(let j = 0; j <this.usuario[0].mesas.length; j++){
            
                        let mesa = {
                            id: this.usuario[0].mesas[j].id,
                            nome: this.usuario[0].mesas[j].nome,
                            sistema:  this.usuario[0].mesas[j].sistema,
                            imgmesa: this.usuario[0].mesas[j].imgmesa,
                        }
                        this.lista_mesas.push(mesa)
            }
        }
    }, 
    created(){
      this.pegarDadosUsuario(this.id);
      this.pegarMesas();
      //console.log(this.lista_usuarios[0].amigos[1]);
    }
}
</script>