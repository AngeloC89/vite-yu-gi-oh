<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="image" :alt="name">
        <div class="card-body">
          <p class="card-text">
            <span>{{ name }}</span>
            <br>
            <span>{{ archetype }}</span>
          </p>
        </div>
      </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: [
            'id',
            'image',
            'name',
            'archetype'
       ],
             
    }
</script>

<style lang="scss" scoped>

</style>