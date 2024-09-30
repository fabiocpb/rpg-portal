<template>
    <div :class="tipo === 'RPG'? cl_rpg : cl_boardgames">
        {{ jogo }}
    </div>
</template>

<script>
export default{
    props:['jogo', 'tipo'],
    data(){
        return {
            cl_rpg: 'p-1 rounded-md border border-gray-600 text-center bg-blue-400 text-white text-sm',
            cl_boardgames: 'p-1 rounded-md border border-gray-600 text-center bg-orange-400 text-white text-sm'
        }
    }
}
</script>