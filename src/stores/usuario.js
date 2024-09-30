import dados_usuarios from '../data/usuarios.json' 
import { defineStore} from 'pinia'

const useUserStore = defineStore('usuario', {

    state: () => ( {
        usuario: [],
        lista_usuarios: dados_usuarios
    }),

    actions: {
        async pegarDadosUsuario(id) {
          this.usuario = dados_usuarios.filter(usuario => {if(usuario.id === Number(id)){return true;}} );
          //console.log(this.usuario);
        }
    }
})

export default useUserStore
