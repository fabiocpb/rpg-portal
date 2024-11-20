<template>
    <div class="bg-slate-200">
        <div class="flex flex-row mx-32">
            <div class="flex w-full border-r border-white">
                <perfil modo="publico" :id="id"/>
            </div>
            <div class="flex flex-col w-full border-r border-white">
                <div>
                    <p class="mx-10 mb-0 mt-2 font-bold text-xl">Atividades</p>
                </div>
                <div>
                    <mural modo="publico" :id="id"/>
                </div>
            </div>
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