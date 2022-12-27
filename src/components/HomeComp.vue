<template>
  <div class="home" id="Home">
    <div class="home_img">
      <img src="../assets/Home.png" class="home_img_asset" />
    </div>
    <div class="home_text">
      <span class="home_text_nom">Nnamedit</span><br />correcteur orthographique
      en langue ewondo
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComp",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Bubbles&display=swap');

.home {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.home .home_text {
  text-align: left;
  font-size: 40px;
  width: 30%;
}

.home .home_text .home_text_nom {
  background-color: rgb(3, 41, 93);
  color: white;
  padding: 10px;
  font-family: 'Rubik Bubbles', cursive;
}

.home .home_img .home_img_asset {
  margin: auto;
  width: 500px;
  height: 500px;
}

@media screen and (max-width: 800px) {
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .home .home_text {
    text-align: center;
    width: 100%;
    padding: 0%;
  }

  .home .home_img{
    width: 100%;
    padding: 0%;
    overflow: hidden;
  }

  .home .home_img .home_img_asset {

    width: 100%;
    height: 100%;
  }
}
</style>
