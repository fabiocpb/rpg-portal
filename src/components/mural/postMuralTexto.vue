<template>
    <div class="">
        <div class="">
            <h2 class="text-xl font-bold pt-0 px-1">{{ titulo }}</h2>
            <p :class="isShown? classes.contenShown:classes.contentHidden">{{ content }}</p>
            <button v-if="isExpanseButtonShown" @click="expanseText()" class="text-sm hover:text-bold">{{getExpanseSubtitle}}</button>
        </div>
        <div v-if="imagem">
            <img :src="imagemURL" alt="">
        </div>
    </div>
</template>

<script>
export default{
    props: {
        titulo: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        imagem: {
            type: Boolean
        },
        imagemURL: {
            type: Boolean
        }
    },
    data(){
        return {
            classes: {
                contentHidden: "text-md h-24 overflow-clip break-words text-wrap px-1",
                contenShown: "text-md text-wrap break-words px-1"
            },
            isShown: false,
            isExpanseButtonShown: false
        }
    },
    computed: {
        getExpanseSubtitle(){
            if(!this.isShown){
                return "Mais..."
            }else{
                return "Menos..."
            }
        }
    },
    methods: {
        expanseText(){
            this.isShown = !this.isShown
        }
    },
    created(){
        if(this.content.length > 160){
            this.isExpanseButtonShown = true;
        }else{
            this.isExpanseButtonShown = false;
        }
    }
}
</script>