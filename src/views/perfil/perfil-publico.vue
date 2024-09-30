<template>
    <div class="flex flex-row bg-slate-200">
        <div class="flex w-full border-r border-white">
            <perfil :id="id"/>
        </div>
        <div class="flex w-full border-r border-white">
            <mural :id="id"/>
        </div>
  </div>
</template>

<script>
import Mural from '../../components/mural/Mural.vue';
import Perfil from '../../components/profile/perfil.vue';

export default {
    props: ['id'],
    components: [
        Mural,
        Perfil
    ],
}

</script>