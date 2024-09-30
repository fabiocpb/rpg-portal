const { defineStore } = require("pinia");

const AmigosStore = defineStore('amigos', {
    state: () => ({
        amigos: [
            {
                id: 1,
                nome: 'Ted',
                srcImagem: '',
                urlPerfil: ''
            },
            {
                id: 2,
                nome: 'Joe',
                srcImagem: '',
                urlPerfil: ''
            },
            {
                id: 3,
                nome: 'Bob',
                srcImagem: '',
                urlPerfil: ''
            },
            {
                id: 4,
                nome: 'Ned',
                srcImagem: '',
                urlPerfil: ''
            },
            {
                id: 5,
                nome: 'Jane',
                srcImagem: '',
                urlPerfil: ''
            },
            {
                id: 6,
                nome: 'Karen',
                srcImagem: '',
                urlPerfil: ''
            },
            {
                id: 7,
                nome: 'Laura',
                srcImagem: '',
                urlPerfil: ''
            },
            {
                id: 8,
                nome: 'Jess',
                srcImagem: '',
                urlPerfil: ''
            },
        ]
    }),
    getters: {
        pegarAmigos(state){
            return state.amigos;
        },
        procurarAmigo(nomeBusca){
            return this.amigos.find((nome)=> nome === nomeBusca);
        }
    }
}
)