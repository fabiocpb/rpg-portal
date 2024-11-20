<template>
    <div class="flex flex-col justify-end items-center rounded-full">
        <img class="absolute z-0 rounded-lg w-[355px]" :src="mesasrc" :alt="nomemesa">
        <div class="flex flex-row justify-start items-start bg-orange-500 relative px-1 rounded-lg">
            <div class='flex z-10 pr-3 font-bold text-white'>{{ sistema }}</div>
            <div class='flex z-10 font-bold text-white'>{{ nomemesa }}</div>
        </div>
    </div>
</template>

<script>
export default{
    props:['nomemesa', 'mesasrc', 'sistema']
}
</script>