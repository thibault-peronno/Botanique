
<template>

  <SkeletonComponent v-if="this.isSkeleton" :key="this.isSkeleton"/>

  <section class="sectionCardComponent">
    <div v-for="plant in dataList" :key="`plantList-${plant.id}`" >
      <router-link :to="{ name: 'currentPlant', params: { plantId : plant.id } }" >
        <div class="cardPlant" >
          <h1 class="cardPlant_h1">{{ plant.common_name }}</h1>
          <div class="cardPlant_div_picture">
            <img class="cardPlant_picture" :src="plant.image_url ? plant.image_url : '../../../public/icons/plante2.png'" alt="">
          </div>
          <div class="cardPlant_year-family">
            <div class="plantYear">
              <p class="cardText">Découverte</p>
              <p class="cardPlant_year tag">{{ plant.year ? plant.year : 'indéfini' }}</p>
            </div>
            <div class="plantFamilly">
              <p class="cardText">Famille</p>
              <p class="cardPlant_family tag">{{ plant.family_common_name ? plant.family_common_name : 'indéfini' }}</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script >

import SkeletonComponent from './SkeletonComponent.vue';

export default {
    name: "cardPlantComponent",
    data() {
        return {
            dataList: [],
            // plantId: this.plant.id,
        };
    },
    async beforeCreate() {
        await this.$store.dispatch("getPlantsList");
        /* mis après le async pour être sûr que le chargement des datas se fasses après le retour de l'api */
        // console.log(this.$store.getters.isSkeleton);
        this.dataList = this.$store.state.plantsList.data;
        // console.log(this.$store.getters.isSkeleton);
      },
      computed : {
        // pour les method calculées. Appel un getters pour surveiller les changements
        isSkeleton() {
          // console.log(this.$store.getters.isSkeleton);
        return this.$store.getters.isSkeleton;
      }
    },
    props: {
        plant: {
            type: Object,
            default: function () {
                return {
                    id: Number,
                    common_name: String,
                    year: Number,
                    family_common_name: String
                };
            }
        }
    },
    components: { SkeletonComponent }
}
</script>

<style scoped>

.sectionCardComponent{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cardPlant {
  width: 320px;
  min-height: 490px;
  background-color: var(--bgColorCard);
  box-shadow: 5px 4px 10px 0px var(--borderColor);
  padding: 10px;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cardPlant:hover {
  cursor: pointer;
  transform: scale(1.1);
}



.cardPlant_div_picture {
  width: 100%;
  display: flex;
}

.cardPlant_picture {
  width: 200px;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
  margin: 10px auto;
}

.cardPlant_year-family {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}

.cardText{
  text-align: center;
}

.tag {
  color: white;
  font-weight: 700;
  background-color: var(--primaryBgColor);
  padding: 5px 7px;
  margin: 5px 0;
  border-radius: 2px;
  text-align: center;
}

@media (min-width: 720px){
  .sectionCardComponent{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
  }
}
</style>
