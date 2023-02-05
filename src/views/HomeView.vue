
<template>
    <section class="section">
        <h1 class="section_h1">Liste des plantes</h1>
        <div class="listPlantContainer">
            <CardComponent v-for="plantsList in dataList" :key="`plantList-${plantsList.id}`" v-bind:plant="plantsList"/>    
        </div>
        <div>
            <PaginationComponent />
        </div>
    </section>
</template>

<script>
import CardComponent from '../components/CardComponent.vue';
import PaginationComponent from '../components/PaginationComponent.vue';
export default {
    data() {
        // console.log(this.$store.state.plantsList);
        return {
            dataList : [],
        }
    },
    components: {
    CardComponent,
    PaginationComponent
},
    async beforeCreate()
    {
        await this.$store.dispatch('getPlantsList');
        /* mis après le async pour être sûr que le chargement des datas se font après le retour de l'api */
        this.dataList = this.$store.state.plantsList.data;
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