<template>
    <div class="d-flex align-items-center p-3 bg-white">

        <img id="logo" class="img-fluid "
            src="https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg" alt="Logo">

        <h1>Yu-Gi-Oh Api</h1>
    </div>


    <select class="form-select my-5 container " @change="$emit('statusChange')" v-model="store.status">
        <option value="">All</option>
        <option :value="arch.archetype_name" v-for="arch in store.archetypeSel">{{ arch.archetype_name }}</option>
    </select>
</template>

<script>
import { store } from '../data/store';
    export default {
        name: 'HeaderComponent',
        data() {
            return {
                store
            }
        },

    }

</script>

<style lang="scss" scoped>

    #logo {
        width: 100px;
        margin: 0px 10px;
    }

    h1 {
        font-weight: 300;
        font-size: 3.5rem;
    }
</style>