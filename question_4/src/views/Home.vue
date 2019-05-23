<template>
  <main class="home">
    <section class="navbar">
      <NavBar />
    </section>
    <section class="home-container">
      <HomeContent />
    </section>
    <section class="footer">
      <Footer />
    </section>
  </main>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import HomeContent from '@/components/HomeContent.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    NavBar,
    HomeContent,
    Footer,
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
  }
  .home-container {
    padding: 0.5rem 0;
  }
  .footer {
    min-height: 5vh;
    border-top: 1px solid #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
