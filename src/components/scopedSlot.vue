<template>
    <div v-for="botao in botoes" :key="botao">
        <slot :item="botao" :outro-prop="VAZIO"></slot>
    </div>
</template>

<script>
export default {
    data(){
        return {
            botoes: ['Parar', 'Seguir', 'Mudar']
        }
    }
}

</script>

<style>


</style>