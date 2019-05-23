<template>
  <div class="home-wrapper">
    <div class="section-men">
      <h3>For HIM</h3>
      <img src="../assets/mens_clothing.jpg">
    </div>
    <div class="section-women">
      <h3>For HER</h3>
      <img src="../assets/womens_clothing.jpg">
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
    width: auto;
    height: 90%;
  }
  img:hover {
    cursor: pointer;
    background-color:rgb(161, 151, 151);
    opacity: 0.4;
  }
  h3 {
    margin: 0.25rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
</style>
