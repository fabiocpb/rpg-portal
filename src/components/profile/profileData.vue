<template>
    <div class="flex flex-col p-2 border border-black/80 rounded-xl justify-center mx-auto w-full shadow-md mt-3 items-center bg-slate-50">
        <div class="flex flex-row items-center justify-center">
            <div class="flex flex-row justify-center mx-auto p-2 my-2">
                <img class="border border-black/95 p-1 rounded-full shadow-md" :src="profimg" alt="" srcset="">
            </div>
            <ul class="flex flex-col mx-auto w-1/2">
                <li class="text-xl font-bold">{{ apelido }}</li>
                <li>{{ cidade }},{{ pais }}</li>
            </ul>
        </div>
        <!-- <ul class="flex flex-col w-max flex-wrap p-2 text-sm">
            <li><b>Role Playing Games:</b> {{ rpgs }}</li>
            <li><b>Boardgames:</b> {{ boardgames }}</li>
        </ul> -->
        <div class="flex flex-row w-5/6 flex-wrap p-2">
            <TokenJogos v-for="rpg of rpgs" :key="rpg" :jogo="rpg" tipo="RPG"/>
            <TokenJogos v-for="boardgame of boardgames" :jogo="boardgame" tipo="Boardgame"/>
        </div>
        <div class="flex flex-row w-max flex-wrap p-2">
           
        </div>
        <div class="text-xs p-2">
            Membro desde {{ egresso }}
        </div>
    </div>
</template>

<script>
import TokenJogos from '../ui/token-jogos.vue';

export default {
    components: {
        TokenJogos
    },
    props: {
        apelido: {
            type: String
        },
        cidade: {
            type: String
        },
        pais: {
            type: String
        },
        rpgs: {
            type: Array
        },
        boardgames: {
            type: Array
        },
        egresso: {
            type: String
        },
        profimg: {
            type: String
        }
    },
    data(){
        return {
            url: ''
        }
    },
    methods: {
        pegarURLimagem(){
            this.url = new URL(this.profimg, import.meta.url);
        }
    },
    created(){
        this.pegarURLimagem();
    }
}

</script>