
<template>
    Je suis la home
    <div class="listPlantContainer">
        <CardComponent v-for="plantsList in dataList" :key="`plantList-${plantsList.id}`" v-bind:plant="plantsList"/>

    </div>

</template>

<script>
import CardComponent from '../components/CardComponent.vue';
export default {
    name: "home",
    data() {
        console.log(this.$store.state.plantsList);
        return {
            dataList : this.$store.state.plantsList.data
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
<style scoped>

.listPlantContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

</style>