<template>
    <header class="bg-white">
        <div class=" d-flex align-items-center mb-5 p-3 ">

            <img id="logo" class="img-fluid "
                src="https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg" alt="Logo">

            <h1>Yu-Gi-Oh Api</h1>
            <select class="form-select ms-auto w-25" @change="$emit('statusChange')" v-model="store.status">
                <option value="">All</option>
                <option :value="arch.archetype_name" v-for="arch in store.archetypeSel">{{ arch.archetype_name }}
                </option>
            </select>
        </div>
    </header>

</template>

<script>
    import { store } from '../data/store';
    export default {
        name: 'HeaderComponent',
        emits: ['statusChange'],
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