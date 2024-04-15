<template>
    <div class="card m-2 mt-0">
        <img class="card-img-top" :src="image" :alt="name">
        <div class="card-body p-0 ">
          <div  class="card-text p-3 text-center textC">
            <div class="text-white text-uppercase fw-bold">{{ name }}</div>
            <br>
            <span>{{ archetype }}</span>
          </div>
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
@use '../../assets/styles/partials/variables' as *;

.textC{
    background-color: $bg-body-color;
    min-height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between ;

}





</style>