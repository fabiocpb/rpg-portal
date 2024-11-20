<template>
    <the-header :id="idUsuario"/>
    <RouterView/>
</template>

<script>
import {mapState, mapActions} from 'pinia'
import Mural from '../../components/mural/Mural.vue';
import Perfil from '../../components/profile/perfil.vue';
import Amigos from '../../components/amigos/amigos.vue';
import useUserStore from '../../stores/usuario'

export default {
    props: ['id'],
    components: [
        Mural,
        Perfil,
        Amigos
    ],
    computed: {
        ...mapState(useUserStore, ['usuario', 'lista_usuarios', 'idUsuario']),
    },
    methods:{
        ...mapActions(useUserStore, ['pegarDadosUsuario']),
    },
    created(){
        this.pegarDadosUsuario(1);
        this.$router.push('/home/perfil');
    },
    updated(){
        this.pegarDadosUsuario(1);
    }
}

</script>

