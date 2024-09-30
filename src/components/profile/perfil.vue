<template>
    <div class="flex flex-col justify-start items-center mx-8">
          <profile-data
            :apelido="usuario[0].nome"
            :cidade="usuario[0].cidade"
            :pais="usuario[0].pais"
            :rpgs="usuario[0].rpgs"
            :boardgames="usuario[0].boardgames"
            :egresso="usuario[0].egresso"
            :profimg="usuario[0].profimg"
        ></profile-data>
        <amigos :id="usuario[0].id"/>
        <mesas :id="usuario[0].id"/>
    </div>
</template>

<script>
import {mapState, mapActions} from 'pinia'
import useUserStore from '../../stores/usuario' 
import amigos from '../amigos/amigos.vue'
import mesas from '../mesas/mesas.vue'

export default {
  components: {
    amigos,
    mesas
  },
  props: ['id'],
  computed: {
        ...mapState(useUserStore, ['usuario'])
    },
    methods: {
        ...mapActions(useUserStore, ['pegarDadosUsuario']),
    }, 
    created(){
      this.pegarDadosUsuario(this.id);
      console.log(this.usuario);
    }
}
</script>