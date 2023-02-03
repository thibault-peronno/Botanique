
<template>
  <div class="cardPlant">
    <h1 class="cardPlant_h1">Nom de la plante</h1>
    <div class="cardPlant_div_picture">
      <img class="cardPlant_picture"  src="https://d2seqvvyy3b8p2.cloudfront.net/40ab8e7cdddbe3e78a581b84efa4e893.jpg" alt="">
    </div>
    <div class="cardPlant_year-family">
      <p class="cardPlant_year">année</p>
      <p class="cardPlant_family">famille</p>
    </div>
  </div>
</template>

<script >
export default{
  name: "cardPlantComponent"

}
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
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
