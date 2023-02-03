
<template>
    Je suis la home

    <CardComponent/>

</template>

<script>
import { onMounted } from 'vue';
import CardComponent from '../components/CardComponent.vue';
export default {
    name: "home",
    data() {
        return {
        }
    },
    components: {
        CardComponent
    },
    mounted()
    {
        this.$store.dispatch('getPlantsList')
    }
}
</script>
<style>

</style>