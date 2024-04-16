<template> 
    <!-- this is the container for the cards list... here we have the bar with the number of cards -->
    <div class="container p-0" v-if="!store.loading">
        <div class="bg-black text-white fw-bold p-3 fs-4">Found: {{ store.current_rows }} Cards</div>
        <div class=" bg-white row row-cols-12 row-cols-md-3 row-cols-lg-5 ">
            <div v-for="card in store.cards" :key="card.id">
                <CardComponent :id="card.id" :image="card.card_images[0].image_url" :name="card.name"
                    :archetype="card.archetype" />
            </div>
        </div>
    </div>
    <ApiLoader v-else />    
</template>

<script>
    import { store } from '../../data/store';
    import ApiLoader from '../ApiLoader.vue';
    import CardComponent from './CardComponent.vue';


    export default {
        name: 'CardList',
        components: {
            CardComponent,
            ApiLoader

        },
        data() {
            return {
                store
            }
        }
    }
</script>


<style lang="scss" scoped></style>