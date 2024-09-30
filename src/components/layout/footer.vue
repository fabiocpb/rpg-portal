<template>
    <button class="btn btn-primary">
        <slot name="botaoRodape"></slot>
    </button>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
             <li class="page-item"><a class="page-link" href="#"> <slot name="linkhome"></slot></a></li>
            <li class="page-item"><a class="page-link" href="#"><slot name="1"></slot></a></li>
            <li class="page-item"><a class="page-link" href="#"><slot name="2"></slot></a></li>
            <li class="page-item"><a class="page-link" href="#"><slot name="3"></slot></a></li>
            <li class="page-item"><a class="page-link" href="#"><slot name="4"></slot></a></li>
        </ul>
    </nav>
</template>

<script>
export default {

}

</script>

<style scoped>

a {
    color: black !important;
}

</style>