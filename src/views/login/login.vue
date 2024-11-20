<template>
    <div class="flex flex-row lg:h-[610px]">
        <div class="bg-orange-700 w-1/2"></div>
        <div class="flex flex-col justify-center mx-auto items-center mt-20 w-1/2 p-12">
            <img class="pb-2 w-3/4" src="/images/logo RPG - Club-01.png" alt="">
            <div class="flex flex-col items-start">
                <form @submit.prevent="login">
                    <div class="flex flex-col items-end pb-2">
                        <div class="flex flex-row items-end">
                            <label class="px-2" for="email">Email:</label>
                            <input type="text" id="email"  placeholder=" Digite seu e-mail" v-model="email.valor">
                        </div>
                        <p class="text-red-600" v-if="!email.valido">Digite um email válido.</p>
                    </div>
                    <div class="flex flex-col items-end">
                        <div class="flex flex-row items-end">
                            <label class="px-2" for="senha">Senha:</label>
                            <input type="password" id="senha" placeholder=" Digite sua senha" v-model="senha.valor">
                        </div>
                        <p class="text-red-600" v-if="!senha.valida">Digite uma senha válida</p>
                    </div>
                    <div class="flex flex-row justify-center mt-3 mx-auto">
                        <button class="bg-orange-700 p-2 rounded-md text-white font-bold ml-10" type="submit">ENVIAR</button>
                    </div>
                </form>
                <p class="text-green-600 text-center font-bold" v-if="carregando">Carregando...</p>
            </div>
        </div>
    </div>
</template>

<script>
// import { useRouter } from 'vue-router';

export default {
    data(){
        return {
            email:{
                valido: true,
                valor: ""
            },
            senha: {
                valida: true,
                valor: ''
            },
            carregando: false
        }
    },
    methods: {
        login(){
            if(!this.email.valor.includes('@') || this.email.valor.length === ''){
                this.email.valido = false;
                return;
            }
            if(this.senha.valor.length < 8 || this.senha.valor.length === 0){
                this.senha.valida = false;
                return;
            }

            //Coloque aqui o código de serialização com o backend.

            this.carregando = true;
            setTimeout(async () => {   
                //Redireciona para a rota com o id do usuário. 
                await this.$router.push("/home/perfil");
                this.carregando = false;
            }, 3000)
        }
    }
}

</script>