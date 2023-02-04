<template>
    <section class="currentPlantContainer_data_img">
        <div class="currentPlant_data_img">
            <div class="plantContainer-data">
                <h1 class="data-h1">{{ plant.common_name }}</h1>
                <div class="data-info">
                    <p class="">Nom scientique : <span class="lightWord">{{plant.scientific_name}}</span></p>
                    <p class="">Observé par <span class="lightWord">{{plant.observations}}</span> en  <span class="lightWord">{{plant.year}}</span></p>
                </div>
                <div class="">
                    <p class="indicList">Natif de :</p>
                    <ul class="list">
                        <li class="li" v-for="obs in plant.main_species.distribution.native" :key="obs">{{ obs }},&nbsp; </li>
                    </ul>
                    <p class="indicList">Importé :</p>
                    <ul class="list">
                        <li class="li" v-for="obs in plant.main_species.distribution.introduced" :key="obs">{{ obs }},&nbsp; </li>
                    </ul>
                </div>

            </div>
            <div class="plantContainer_img">
                <img :src="plant.image_url" alt="" class="plantContainer-img">
            </div>
        </div>
        
    </section>

</template>

<script>
export default {
    data(){
        return{
            plant : null,

        }
    },
    async beforeCreate(){
       await this.$store.dispatch('getPlantById', this.$route.params.plantId);
       this.plant = this.$store.state.currentPlant.data;
        console.log(this.$store.state.currentPlant);
    }
}
</script>

<style scoped>

.currentPlant_data_img {
    display: flex;
    padding: 0 30px;
}
.plantContainer-data{
    width: 60%;
    box-shadow: 7px 0px 2px -2px rgba(110, 175, 125, 0.50);
    margin: 0 20px 10px 0;
}

.data-h1{
    margin: 0 0 20px 0;
}
.data-info{
    margin: 20px 0;
}
.lightWord{
    font-weight: 700;
    color: rgb(63, 115, 75);
}

.indicList{
    font-weight: bold;
    margin: 0 0 10px 0;
}
.list{
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 10px 0;
}

.li{
    margin: 0.5 5px;
}

.plantContainer_img{
    width: 40%;
}

.plantContainer-img{
    box-shadow: 0px 0px 3px 0px grey;
    border-radius: 10px;
    max-height: 500px;
    object-fit: cover;
}

</style>