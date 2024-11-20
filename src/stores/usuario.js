import dados_usuarios from '../data/usuarios.json' 
import { defineStore} from 'pinia'

const useUserStore = defineStore('usuario', {

    state: () => ( {
        usuario: {},
        usuarioPublico: {},
        idUsuario: '1',
        lista_usuarios: dados_usuarios
    }),

    actions: {
        async pegarDadosUsuario(id, modo) {
          let filteredUser = dados_usuarios.filter(usuario => {if(usuario.id === Number(id)){return true;}} );
          if(modo === "privado"){
            this.usuario = filteredUser[0];
          }else{
            this.usuarioPublico = filteredUser[0];
          }
         
          //console.log(this.usuario);
        }
    }
})

export default useUserStore
