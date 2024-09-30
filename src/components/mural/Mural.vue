<template>
    <div class="flex flex-col px-8 mb-3">
        <postar :usuario="usuario[0]"/>
        <post-mural :posts="posts" :usuarios="lista_usuarios"/>
    </div>
</template>

<script>
import {mapState, mapActions} from 'pinia'
import useUserStore from '../../stores/usuario'
import usePostsStore from '../../stores/posts'
import postar from '../mural/postar-mural.vue'

export default {
    components: {
        postar
    },
   props: ['id'],
   data(){
        return {

        }
   },
   computed: {
        ...mapState(useUserStore, ['usuario', 'lista_usuarios']),
        ...mapState(usePostsStore, [ 'posts'])
    },
    methods: {
        ...mapActions(useUserStore, ['pegarDadosUsuario']),
        ...mapActions(usePostsStore, ['pegarPostsUsuarios'])
    }, 
    created(){
      this.pegarDadosUsuario(this.id);
      this.pegarPostsUsuarios();
      console.log(this.posts);
    }
}
</script>