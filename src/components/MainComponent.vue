<template>
    <main class="container bg-white p-4 ">
        <CardList />

    </main>
</template>

<script>
    import CardList from './MainComponents/CardList.vue'
    export default {
        name: 'MainComponent',
        components: {
            CardList
        }
    }
</script>

<style lang="scss" scoped>

</style>