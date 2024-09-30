<template>
    <RouterView></RouterView>
</template>

<script>
import footerButton from './components/layout/footer.vue'

export default {
  props: ['id'],
  components: {
    footerButton,
  },
  data() {
        return {
            selectedComponent: 'footerButton',
        } 
    },
    methods: {
      setComp(cmp) {
        this.selectedComponent = cmp;
      }
    }
}

</script>
