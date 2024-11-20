<template>
    <div class="flex flex-row border-2 w-full bg-orange-600 items-center">
        <router-link to="/home/perfil" class="no-underline flex flex-row itens-center mx-auto">
            <div class="flex flex-row w-full py-0 items-center shadow-md">
                <div class=""><img src="/images/logo RPG - Club-03.png"  class="logo"></div>
                <div class="fontTopBar pl-1">Olá <b>{{ usuario.nome }}</b>!</div>
            </div>
        </router-link> 
        <router-link to="/login" class="no-underline flex flex-row itens-center mx-auto">
            <div class="flex flex-row w-1/2 py-0 justify-center items-center">
                <v-icon name="io-exit-outline" inverse scale="1.3"/>
                <div class="fontTopBar pl-1">Sair</div>
            </div>
        </router-link> 
    </div>
    <!-- <div class="base">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Olá {{ nome }}</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Início</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Mural</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Configurações
                        </a>
                    </li>
                </ul>   
                </div>
            </div>
        </nav>
    </div>     -->
</template>

<script>
import {mapState, mapActions} from 'pinia'
// import dados_usuarios from '../../data/usuarios.json'
import useUserStore from '../../stores/usuario' 
export default {
    computed: {
        ...mapState(useUserStore, ['usuario', 'idUsuario'])
    },
    methods: {
        ...mapActions(useUserStore, ['pegarDadosUsuario']),
    }, 
    created(){
      this.pegarDadosUsuario(this.idUsuario);
      console.log(this.usuario);
    },
    updated(){
      this.pegarDadosUsuario(this.idUsuario);
      console.log(this.usuario);
    }
}
</script>