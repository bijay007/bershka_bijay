<template>
  <main class="home">
    <section class="navbar">
      <NavBar />
    </section>
    <section class="home-container">
      <HomeContainer />
    </section>
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import HomeContainer from '@/components/HomeContainer.vue';

export default {
  name: 'home',
  components: {
    NavBar,
    HomeContainer,
  },
};
</script>
<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .navbar {
    min-height: 8vh;
    border-bottom: 1px solid #e9e9e9;
  }
  .home-container {
    padding: 0.5rem 0;
  }
</style>