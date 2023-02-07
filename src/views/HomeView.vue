
<template >
    <section class="section" >
        <h1 class="section_h1">Liste des plantes</h1>
        <div class="listPlantContainer">
            <CardComponent :key="this.$store.state.pages"/>    
        </div>
        <div>
            <PaginationComponent :key="this.$store.state.pages"/>
        </div>
    </section>
</template>

<script>
import CardComponent from '../components/CardComponent.vue';
import PaginationComponent from '../components/PaginationComponent.vue';
export default {
    
    components: {
    CardComponent,
    PaginationComponent
    },
    
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