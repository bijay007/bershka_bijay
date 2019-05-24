<template>
  <nav>
    <div class="navabar-logo">
      <router-link to="/">
        <img src="../assets/logo-shop.png">
      </router-link>
    </div>
    <div class="navbar-title">
      <h3>Bershka</h3>
    </div>
    <div class="navbar-actions" @mouseover="hover = true" @mouseleave="hover = false">
      <img src="../assets/icon-cart.png">
      <span>{{count}}</span>
    </div>
    <div v-if="hover" class="cart-mini-detail">
      You have {{count}} elements in cart
    </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data: function() {
    return {
      hover: false,
    }
  },
  computed: {
    count() {
      return this.$store.state.quantity;
    },
  },
};
</script>


<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 4rem;
    border-bottom: 1px solid #e9e9e9;
  }
  .navbar-actions {
    position: relative;
  }
  h3 {
    margin: 1rem;
    letter-spacing: 0.25rem;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', sans-serif;
  }
  img {
    height: 5vh;
    width: auto;
  }
  span {
    position: absolute;
    top: 40%;
    left: 35%;
    font-weight: bold;
    color: rgba(255,0,0,0.8);
  }
  .cart-mini-detail {
    z-index: 10;
    position: absolute;
    right: 7%;
    top: 6%;
    width: 8rem;
    border: 1px solid rgba(0,0,0,0.5);
    border-radius: 5px;
    padding: 0.5rem;
  }
</style>
