<template>
    <section>
        je suis la page d'une plante
    </section>

</template>

<script>
export default {
    mounted(){
        this.$store.dispatch('getPlantById', this.$route.params.plantId);
    }
}
</script>

<style>
</style>