<template>
    <section class="sectionSkeleton">
    <div v-for="count in counts = 5" :key="count">
        <div class="cardSkeleton" >
          <h1 class="cardSkeleton_h1"></h1>
          <div class="cardSkeleton_div_picture">
            <div class="cardSkeleton_picture"></div>
          </div>
          <div class="cardSkeleton_year-family">
            <div class="SkeletonYear">
              <p>Découverte</p>
              <p class="cardSkeleton_year tag"></p>
            </div>
            <div class="plantFamilly">
              <p>Famille</p>
              <p class="cardPlant_family tag"></p>
            </div>
          </div>
        </div>
    </div>
  </section>

</template>

<script>

export default {

}
</script>

<style scoped>

.sectionSkeleton{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cardSkeleton {
  width: 320px;
  min-height: 350px;
  border: 2px solid rgb(110, 175, 125);
  box-shadow: 0px 0px 3px 0px grey;
  /* border-radius: 10px; */
  padding: 10px;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cardSkeleton_h1{
    width: 200px;
    height: 20px;
    margin: 10px auto 0;
    background-color: rgb(63, 115, 75);
    animation : skeleton 0.8s ease-in-out infinite alternate;
}

.cardSkeleton_div_picture {
  width: 100%;
  display: flex;
}

.cardSkeleton_picture {
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin: 10px auto;
  background-color: rgb(110, 175, 125);
  animation : skeleton 0.8s ease-in-out infinite alternate;
}

@keyframes skeleton {
    to{
        opacity : 0.6;
    }
}

.cardSkeleton_year-family {
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
  background-color: rgb(63, 115, 75);
  animation : skeleton 0.8s ease-in-out infinite alternate;
}

@media (min-width: 720px){
  .sectionSkeleton{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 100%;
  }
}
</style>