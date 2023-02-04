
<template>
  <div class="cardPlant" >
    <h1 class="cardPlant_h1">{{ plant.common_name }}</h1>
    <div class="cardPlant_div_picture">
      <img class="cardPlant_picture"  src="{{ plant.image_url }}" alt="">
    </div>
    <div class="cardPlant_year-family">
      <p class="cardPlant_year">{{ plant.year }}</p>
      <p class="cardPlant_family">{{ plant.family_common_name }}</p>
    </div>
  </div>
</template>

<script >
export default{
  name: "cardPlantComponent",
  props: {
    plant: {
      type : Object,
      default: function () {
        return {
          id : Number,
          common_name : String,
          year : Number,
          family_common_name : String
        }
      }
    }
  }
}
</script>

<style scoped>

.cardPlant{
  width: 200px;
	box-shadow: 0px 0px 3px 0px grey;
  border-radius: 10px;
  padding: 10px;
  margin: 20px 10px
}

h1 {
  font-weight: bolder;
  font-size: 2rem;
  color: rgb(110, 175, 125);
  margin: 0 0 10px 0;
  text-align: center;
}

.cardPlant_div_picture{
  width: 100%;
  display: flex;
}

.cardPlant_picture{
  width: 30%;
  min-width: 150px;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  margin: 0 auto;
}

.cardPlant_year-family{
  display: flex;
  justify-content: space-evenly;
}


@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
