<template>
    <div class="container bg-white p-3 row " id="cardL">
        <div class="p-2 bg-black text-white fw-bold ">Found: {{ store.current_rows }} Cards</div>
        <div class="col-12 col-md-6 col-lg-3" v-for="card in store.cards" :key="card.id">
            <CardComponent :id="card.id" :image="card.card_images[0].image_url" :name="card.name" :archetype="card.archetype" />
        </div>
    </div>
</template>

<script>
    import { store } from '../../data/store';
    import CardComponent from './CardComponent.vue';


    export default {
        name: 'CardList',
        components: {
            CardComponent
        },
        data() {
            return {
                store
            }
        }
    }
</script>


<style lang="scss" scoped>

</style>