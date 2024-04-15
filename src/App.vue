<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import { store } from './data/store';
import axios from 'axios'
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
    methods: {
      getCards() {
        this.store.loading = true

        axios.get(this.store.apiUrl)
        .then((res) => {
          this.store.cards = res.data.data 
          this.store.current_rows = res.data.meta.current_rows
          console.log(this.store.cards)
          console.log(this.store.current_rows)
        
        })
        .catch((error) => {
          console.log(error);
        }).finally(() => {
          this.store.loading = false
        });
        
      }
    },
    created() {
      this.getCards()
      
      
    },
  }
</script>

<style lang="scss" scoped>



</style>