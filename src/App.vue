<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import { store } from './data/store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent
    },
    data() {
      return {
        store
        
      }
    },
    created() {
      
      
    },
  }
</script>

<style lang="scss" scoped>



</style>