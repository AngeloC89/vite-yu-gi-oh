<template>
    <div class="container">
        <div class="bg-black text-white fw-bold my-3 p-3 fs-4">Found: {{ store.current_rows }} Cards</div>
        <div class=" bg-white  row row-cols-2 row-cols-lg-5 g-2 g-lg-3  ">
            <div class="  p-0" v-for="card in store.cards" :key="card.id">
                <CardComponent :id="card.id" :image="card.card_images[0].image_url" :name="card.name"
                    :archetype="card.archetype" />
            </div>
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


<style lang="scss" scoped></style>