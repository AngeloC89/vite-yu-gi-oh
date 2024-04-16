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

        axios.get(this.store.apiUrl + this.store.endPoint.cards, this.store.options)
          .then((res) => {
            this.store.cards = res.data.data
            this.store.current_rows = res.data.meta.current_rows
            this.store.archetypes = res.data.data.map(card => card.archetype)
            console.log(this.store.cards)
            console.log(this.store.current_rows)
          }).catch((error) => {
            console.log(error);
          }).finally(() => {
            this.store.loading = false;
          });

      },
      getArchetypeSel() {
        axios.get(this.store.apiUrl + this.store.endPoint.archetype)
          .then((res) => {
            this.store.archetypeSel = res.data.slice(200, 215);
            console.log(this.store.archetypeSel);
            console.log(this.status)
          });
      },
    },
    created() {
      //this.getCards()
     this.getArchetypeSel();
     

    },
  }
</script>

<style lang="scss" scoped></style>