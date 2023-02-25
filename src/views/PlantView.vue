<template>
    <section class="currentPlantContainer_data_img">
        <div class="currentPlant_data_img">
            <div class="plantContainer-data">
                <h1 class="data-h1">{{ plant.common_name || 'indéfini' }}</h1>
                <div class="data-info">
                    <p class="">Nom scientique : <span class="lightWord">{{ plant.scientific_name || 'indéfini' }}</span>
                    </p>
                    <p class="">Observé par <span class="lightWord">{{ plant.observations || 'indéfini' }}</span> en <span
                            class="lightWord">{{ plant.year || 'indéfini' }}</span></p>
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
                <img :src="plant.image_url ? plant.image_url :'../../../public/icons/plante2.png'" alt="" class="plantContainer-img">
            </div>
        </div>
    </section>
    <FooterComponent />
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

.currentPlantContainer_data_img {
    margin: 0 0 35px 0;
}

.currentPlant_data_img {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    height: 90%;
    margin: 0 auto;
    background-color: var(--bgColorCard);
    padding: 5px 2px;
    border-radius: 2px;
    box-shadow: 5px 4px 10px 0px var(--borderColor);
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
    color: var(--texteColor)
}

.plantContainer_img {
    width: 90%;
    display: flex;
    margin: 0 auto;
}

.plantContainer-img {
    box-shadow: 2px 2px 5px var(--borderColor);
    border-radius: 2px;
    width: 100%;
    object-fit: cover;
    margin: 10px auto;
}

@media (min-width : 880px) {
    .currentPlant_data_img {
        padding: 30px;
        flex-direction: row;
        justify-content: center;
        height: calc(100vh - 240px - 35px);
    }

    .plantContainer-data {
        width: 60%;
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
        border-radius: 2px;
        width: 100%;
        object-fit: cover;
        height: 450px;
    }
}
</style>