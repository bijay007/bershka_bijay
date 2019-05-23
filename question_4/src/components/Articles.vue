<template>
  <div>
    <NavBar />
    <div class="articles-content">
      <h2>Latest Arrivals</h2>
    </div>
  </div>
</template>

<script>
  import NavBar from './NavBar';
  export default {
    components: {
      NavBar,
    }
  }
</script>


<style scoped>
  .articles-content {
    padding: 1rem;
  }
  h2 {
    letter-spacing: 0.25rem;
    color: rgba(0,0,0,0.6);
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3);
  }
</style>
