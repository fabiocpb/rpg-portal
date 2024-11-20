<template>
    <div class="flex flex-row bg-slate-200">
        <div class="flex w-full border-r border-white">
            <perfil modo="privado" :id="idUsuario"/>
        </div>
        <div class="flex w-full border-r border-white">
            <mural modo="privado" :id="idUsuario"/>
        </div>
        <div class="flex w-full">
          <h3>Notícias</h3>
        </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'pinia'
import Mural from '../../components/mural/Mural.vue';
import Perfil from '../../components/profile/perfil.vue';
import useUserStore from '../../stores/usuario'

export default {
    components: [
        Mural,
        Perfil
    ],
    computed: {
        ...mapState(useUserStore, ['usuario', 'lista_usuarios', 'idUsuario']),
    },
    methods:{
        ...mapActions(useUserStore, ['pegarDadosUsuario']),
    },
}

</script>