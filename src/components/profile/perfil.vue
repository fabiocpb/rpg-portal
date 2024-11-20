<template>
    <div class="flex flex-col justify-start items-center mx-8">
      <div v-if="modo === 'privado'">
        <profile-data
            :apelido="usuario.nome"
            :cidade="usuario.cidade"
            :pais="usuario.pais"
            :rpgs="usuario.rpgs"
            :boardgames="usuario.boardgames"
            :egresso="usuario.egresso"
            :profimg="usuario.profimg"
        ></profile-data>
        <amigos :id="usuario.id" modo="privado"/>
        <mesas :id="usuario.id"/>
      </div>
      <div v-else>
        <profile-data
            :apelido="usuarioPublico.nome"
            :cidade="usuarioPublico.cidade"
            :pais="usuarioPublico.pais"
            :rpgs="usuarioPublico.rpgs"
            :boardgames="usuarioPublico.boardgames"
            :egresso="usuarioPublico.egresso"
            :profimg="usuarioPublico.profimg"
        ></profile-data>
        <amigos :id="usuarioPublico.id" modo="publico"/>
        <mesas :id="usuarioPublico.id"/>
      </div>
         
    </div>
</template>

<script>
import {mapState, mapActions} from 'pinia'
import useUserStore from '../../stores/usuario' 
import amigos from '../amigos/amigos.vue'
import mesas from '../mesas/mesas.vue'

export default {
  props: ['id', 'modo'],
  components: {
    amigos,
    mesas
  },
  computed: {
        ...mapState(useUserStore, ['usuario', 'idUsuario', 'usuarioPublico'])
    },
    methods: {
        ...mapActions(useUserStore, ['pegarDadosUsuario']),
    }, 
    created(){
      if(this.modo === 'privado'){
        this.pegarDadosUsuario(this.idUsuario, 'privado');
        //console.log(this.usuario);
      }else{
        this.pegarDadosUsuario(this.id, 'publico');
      }
    },
    updated(){
      if(this.modo === 'privado'){
        this.pegarDadosUsuario(this.idUsuario, 'privado');
        //console.log(this.usuario);
      }else{
        this.pegarDadosUsuario(this.id, 'publico');
      }
    }
}
</script>