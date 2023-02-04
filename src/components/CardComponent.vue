
<template>
  <section>
    <router-link :to="{ name: 'currentPlant', params: { plantId : plant.id} }">
    <div class="cardPlant">
      <h1 class="cardPlant_h1">{{ plant.common_name }}</h1>
      <div class="cardPlant_div_picture">
        <img class="cardPlant_picture" :src="plant.image_url" alt="">
      </div>
      <div class="cardPlant_year-family">
        <div class="plantYear">
          <p>Découverte</p>
          <p class="cardPlant_year tag">{{ plant.year }}</p>
        </div>
        <div class="plantFamilly">
          <p>Famille</p>
          <p class="cardPlant_family tag">{{ plant.family_common_name ? plant.family_common_name : 'non reçu' }}</p>
        </div>
      </div>
    </div>
  </router-link>
  </section>
</template>

<script >
export default {
  name: "cardPlantComponent",
  props: {
    plant: {
      type: Object,
      default: function () {
        return {
          id: Number,
          common_name: String,
          year: Number,
          family_common_name: String
        }
      }
    }
  }
}
</script>

<style scoped>
.cardPlant {
  width: 250px;
  min-height: 380px;
  box-shadow: 0px 0px 3px 0px grey;
  border-radius: 10px;
  padding: 10px;
  margin: 20px 10px;
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
  width: 150px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
  margin: 10px auto;
}

.cardPlant_year-family {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
}

.tag {
  color: white;
  font-weight: 700;
  background-color: rgb(63, 115, 75);
  padding: 5px 7px;
  margin: 5px 0;
  border-radius: 10px;
  text-align: center;
}


@media (min-width: 1024px) {}
</style>
