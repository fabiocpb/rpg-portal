<template>
    <the-header :id="id"/>
    <RouterView/>
</template>

<script>
import Mural from '../../components/mural/Mural.vue';
import Perfil from '../../components/profile/perfil.vue';
import Amigos from '../../components/amigos/amigos.vue';

export default {
    props: ['id'],
    components: [
        Mural,
        Perfil,
        Amigos
    ],
    created(){
        this.$router.push('/home/1/perfil');
    }
}

</script>

