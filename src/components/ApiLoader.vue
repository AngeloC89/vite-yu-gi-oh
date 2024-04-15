<template>
    <div class="d-flex justify-content-center align-items-center flex-column ">
        <h2 class="text-uppercase mx-2">Loading </h2>
        <i class="fa-solid fa-spinner fa-spin"></i>

    </div>
</template>

<script>
    export default {
        name: "APiLoader"

    }
</script>

<style lang="scss" scoped>
    div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10;
        color: white;
    }

    i {
        font-size: 3rem;
    }
</style>