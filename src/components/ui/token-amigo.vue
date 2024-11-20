<template>
    <div class="p-2 flex flex-col justify-center items-center rounded-full">
        <router-link :to='rotaPerfilPublico'>
            <img class="rounded-full w-auto shadow-md" :src="fotosrc" :alt="nome">
        </router-link>
        <router-link class="no-underline text-black text-center hover:text-orange-500 active:text-blue-300  visited:text-blue-900" :to='rotaPerfilPublico'>
            <div class="text-xs px-2">{{ nome }}</div>
        </router-link>
    </div>
</template>

<script>
export default{
    props:['nome', 'fotosrc', 'id'],
    data(){
        return{
            rotaPerfilPublico: `/perfil-publico/perfil/${this.id}/`
        }
    }
}
</script>