<template>
    <section class="currentPlantContainer_data_img">
        <div class="currentPlant_data_img">
            <div class="plantContainer-data">
                <h1 class="data-h1">{{ plant.common_name }}</h1>
                <div class="data-info">
                    <p class="">Nom scientique : <span class="lightWord">{{ plant.scientific_name }}</span></p>
                    <p class="">Observé par <span class="lightWord">{{ plant.observations }}</span> en <span
                            class="lightWord">{{ plant.year }}</span></p>
                </div>
                <div class="">
                    <details>
                        <summary>
                            <p class="indicList">Natif de</p>
                        </summary>
                        <ul class="list">
                            <li class="li" v-for="obs in plant.main_species.distribution.native" :key="obs">{{
                                obs
                            }},&nbsp; </li>
                        </ul>
                    </details>
                    <details>
                        <summary>
                            <p class="indicList">Importée à</p>
                        </summary>
                        <ul class="list">
                            <li class="li" v-for="obs in plant.main_species.distribution.introduced" :key="obs">{{
                                obs
                            }},&nbsp; </li>
                        </ul>
                    </details>

                </div>

            </div>
            <div class="plantContainer_img">
                <img :src="plant.image_url" alt="" class="plantContainer-img">
            </div>
        </div>
        <FooterComponent />
    </section>

</template>

<script>

import FooterComponent from '../components/FooterComponent.vue';
export default {
    data() {
        return {
            plant: null,

        }
    },
    components: {
        FooterComponent,
    },
    async beforeCreate() {
        // console.log(this.$route.params.plantId);
        await this.$store.dispatch('getPlantById', this.$route.params.plantId);
        this.plant = this.$store.state.currentPlant.data;
        // console.log(this.$store.state.currentPlant);
    }
}
</script>


<style scoped>
@import '../assets/varCss.css';
.currentPlant_data_img {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.plantContainer-data {
    width: 90%;
}

.data-h1 {
    margin: 0 0 20px 0;
}

.data-info {
    margin: 20px 0;
}

.lightWord {
    font-weight: 700;
    color: var(--titleH3color);
}

.indicList {
    font-weight: bold;
    display: inline-block;
}

details {
    width: 100%;
    border-bottom: 1px solid var(--borderColor);
    margin: 0 0 20px 0;
}
/* permet de supprimer le marker, sauf sur macos */
summary {
    list-style: none;
    /*Il faut espacer le marker pour qu'il puisse s'animer. Ici j'utilise flexbox */
    display: flex;
    justify-content: space-between;
}

/* permet de supprimer le marker sur macos */
details summary::-webkit-details-marker {
    display: none;
}

summary:hover {
    color: var(--texteColorNav);
    cursor: pointer;
}

summary::after {
    content: "+";
    color: var(--linkColor);
    font-weight: bold;
    font-size: 30px;
    transition: transform 0.5s;
    margin: 10px;
}

details[open] summary::after {
    transform: rotate(45deg);
    color: rgba(110, 175, 125, 0.50);
}

.list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 10px 0;
}

.li {
    margin: 0.5 5px;
    color : var(--texteColor)
}

.plantContainer_img {
    width: 100%;
    display: flex;
    margin: 0 0 150px 0;
}

.plantContainer-img {
    box-shadow: 0px 0px 3px 0px grey;
    border-radius: 10px;
    max-height: 380px;
    object-fit: cover;
    margin: 0 auto;
}

@media (min-width : 880px) {
    .currentPlant_data_img {
    display: flex;
    padding: 0 30px;
    flex-direction: row;
    align-items: start;
    height: calc(100vh - 280px);
}

.plantContainer-data {
    width: 60%;
    box-shadow: 7px 0px 2px -2px rgba(110, 175, 125, 0.50);
    margin: 0 20px 10px 0;
}



.data-h1 {
    margin: 0 0 20px 0;
}

.data-info {
    margin: 20px 0;
}

.lightWord {
    font-weight: 700;
}

.indicList {
    font-weight: bold;
    display: inline-block;
}

details {
    width: 90%;
    margin: 0 0 20px 0;
}
/* permet de supprimer le marker, sauf sur macos */
summary {
    list-style: none;
    /*Il faut espacer le marker pour qu'il puisse s'animer. Ici j'utilise flexbox */
    display: flex;
    justify-content: space-between;
}

/* permet de supprimer le marker sur macos */
details summary::-webkit-details-marker {
    display: none;
}

summary:hover {
    cursor: pointer;
}

summary::after {
    content: "+";
    font-weight: bold;
    font-size: 30px;
    transition: transform 0.5s;
    margin: 10px;
}

details[open] summary::after {
    transform: rotate(45deg);
    color: rgba(110, 175, 125, 0.50);
}

.list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 10px 0;
}

.li {
    margin: 0.5 5px;
}

.plantContainer_img {
    width: 40%;
    margin: 0;
}

.plantContainer-img {
    box-shadow: 0px 0px 3px 0px grey;
    border-radius: 10px;
    max-height: 500px;
    object-fit: cover;
}
}
</style>