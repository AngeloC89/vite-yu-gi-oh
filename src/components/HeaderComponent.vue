<template>
    <div class="d-flex align-items-center p-3 bg-white">
    
            <img id="logo" class="img-fluid " src="https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg"
                alt="Logo">

        <h1>Yu-Gi-Oh Api</h1>
    </div>


    <select class="form-select my-5 container " @change="$emit('statusSearch')"  v-model="status">
        <option value="">All</option>
        <option value="avlive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style lang="scss" scoped>

#logo{
    width: 100px;
    margin: 0px 10px;
}
h1{
    font-weight: 300;
    font-size: 3.5rem;
}
</style>