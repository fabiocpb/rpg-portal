<template>
    <div class="flex flex-row border-2">
            <div class="bg-orange-700">
                <a class="bg-red-700">Olá {{ nome }}</a>
                <ul class="">
                    <li class="">
                        <a class="" >Início</a>
                    </li>
                    <li class="">
                        <a class="" >Mural</a>
                    </li>
                    <li class="">
                        <a class="">
                            Configurações
                        </a>
                    </li>
                </ul>   
            </div>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String
        }
    }
}
</script>