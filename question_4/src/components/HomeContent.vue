<template>
  <div class="home-wrapper">
    <div class="section-men">
      <h3>For HIM</h3>
      <router-link to="/men">
        <img src="../assets/mens_clothing.jpg">
      </router-link>
    </div>
    <div class="section-women">
      <h3>For HER</h3>
      <router-link to="/women">
        <img src="../assets/womens_clothing.jpg">
      </router-link>
    </div>
  </div>
</template>

<style scoped>
  .home-wrapper {
    display: flex;
    flex-direction: column;
    padding: 2rem;
  }
  .section-men, .section-women {
    width: 100%;
    height: 60vh;
    padding: 0.5rem;
  }
  img {
    height: 90%;
    width: auto;
    max-width: 100%;
  }
  img:hover {
    cursor: pointer;
    background-color:rgb(161, 151, 151);
    opacity: 0.4;
  }
  h3 {
    margin: 0.25rem;
    font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
  }
  @media (max-width: 768px) {
    .home-wrapper {
      /* Normally images in desktop mode fill whole row so we want them to fill less rowspace in mobile  */
      flex-direction: row;
    }
    .section-men, .section-women {
      max-width: 50%;
      height: 80vh;
    }
  }
</style>
