<template>
    <div class="flex flex-col px-8 mb-3">
        <div v-if="modo === 'privado'">
            <postar :usuario="usuario"/>
            <post-mural :posts="posts" :usuarios="lista_usuarios"/>
        </div>
        <div v-else>
            <post-mural :posts="posts_usuario" :usuarios="lista_usuarios"/>
        </div>
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
   props: ['id', 'modo'],
   data(){
        return {

        }
   },
   computed: {
        ...mapState(useUserStore, ['usuario', 'lista_usuarios']),
        ...mapState(usePostsStore, [ 'posts', 'posts_usuario'])
    },
    methods: {
        ...mapActions(useUserStore, ['pegarDadosUsuario']),
        ...mapActions(usePostsStore, ['pegarTodosOsPosts', 'pegarPostsUsuario'])
    }, 
    created(){
      this.pegarDadosUsuario(this.id);
      if(this.modo === 'privado'){
        this.pegarTodosOsPosts();
      }else{
        this.pegarPostsUsuario(this.id);
      }
      console.log(this.posts);
    },
    updated(){
      this.pegarDadosUsuario(this.id);
      if(this.modo === 'privado'){
        this.pegarTodosOsPosts();
      }else{
        this.pegarPostsUsuario(this.id);
      }
      console.log(this.posts);
    }
}
</script>