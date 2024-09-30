import dados_usuarios from '../data/usuarios.json' 
import { defineStore} from 'pinia'

const usePostsStore = defineStore('posts', {

    state: () => ( {
        posts: []
    }),

    actions: {
        pegarPostsUsuarios(){
            for(let i = 0; i < dados_usuarios.length; i++){
                for(let j = 0; j < dados_usuarios[i].postsTexto.length; j++){
                    let postSimples = {
                        id:  dados_usuarios[i].postsTexto[j].id,
                        nomeusuario: dados_usuarios[i].nome,
                        data:  dados_usuarios[i].postsTexto[j].data,
                        titulo:  dados_usuarios[i].postsTexto[j].titulo,
                        content:  dados_usuarios[i].postsTexto[j].content,
                    }
                    this.posts.push(postSimples)
                    this.posts.sort(function(a, b){
                        return new Date(b.data) - new Date(a.data);
                    });
                    //console.log(this.posts);
                }
            }
        },
        pegarIdPost(){

        },
        criarPost(post){
            this.posts.push(post);
            this.posts.sort(function(a, b){
                return new Date(b.data) - new Date(a.data);
            });
        }
    }
})

export default usePostsStore