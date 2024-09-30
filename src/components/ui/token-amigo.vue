<template>
    <div class="p-2 flex flex-col justify-center items-center rounded-full">
        <img class="rounded-full w-auto shadow-md" :src="fotosrc" :alt="nome">
        <div class="text-xs px-2">{{ nome }}</div>
    </div>
</template>

<script>
export default{
    props:['nome', 'fotosrc']
}
</script>