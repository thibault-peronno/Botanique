
<template>
    <section class="section">
        <h1 class="section_h1">Liste des plantes</h1>
        <div class="listPlantContainer">
            <CardComponent v-for="plantsList in dataList" :key="`plantList-${plantsList.id}`" v-bind:plant="plantsList"/>    
        </div>
    </section>
</template>

<script>
import CardComponent from '../components/CardComponent.vue';
export default {
    data() {
        // console.log(this.$store.state.plantsList);
        return {
            dataList : this.$store.state.plantsList.data,
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

.section_h1{
    text-align: center;
    font-size: 4rem;
    font-weight: bolder;
    color: rgb(110, 175, 125);
    margin: 2rem;
}

.listPlantContainer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

</style>