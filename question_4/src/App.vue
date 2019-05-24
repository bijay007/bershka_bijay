<template>
  <div id="app">
    <router-view :key="$route.fullPath"/>
    <div class="clear-cart" @click="clearCart">
      <img src="./assets/clear-cart.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    clearCart() {
      this.$store.dispatch('CLEAR_CART');
    },
  },
}
</script>


<style>
  body {
    margin: 0;
    height: 100%;
  }
  #app {
    font-size: 16px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  .clear-cart {
    position: fixed;
    bottom: 1.5rem;
    right: 3rem;
    height: 2rem;
    width: 2rem;
    cursor: pointer;
  }
  .clear-cart > img {
    height: auto;
    width: 100%;
  }
</style>
