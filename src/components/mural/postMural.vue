<template>
    <div class="pt-1">
        <div v-for="post in posts" :key="post.id" class="mt-2 border rounded-lg bg-slate-50 shadow-md">
            <div class="flex flex-row items-center border-b-2 p-2">
                <img class="w-1/12 rounded-full shadow-md" :src="pegarImagemPerfil(post.nomeusuario)" alt="">
                <div class="flex flex-col">
                    <p class="px-2 text-sm m-0">{{ post.nomeusuario}}</p>
                    <p class="px-2 text-xs m-0">{{ converterData(post.data) }}</p>
                </div>
            </div>
            <post-texto class="p-2"  :titulo="post.titulo" :content="post.content" />
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            tipopost: 'texto'
        }
    },
    props: {
        posts: {
            type: Array,
            required: true
        },
        usuarios: {
            type: Array,
            required: true
        }
    },
    methods: {
        converterData(data){
            let dataConv = new Date(data).toDateString();
            return dataConv;
        },
        pegarImagemPerfil(nomeusuario){
            let urlimagem = ''
            for(let i = 0; i < this.usuarios.length; i++){
                if(nomeusuario === this.usuarios[i].nome){
                    urlimagem = this.usuarios[i].profimg;
                }
            }
            return urlimagem
        }
    }
}
</script>