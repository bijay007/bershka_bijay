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
    <div class="navbar-actions">
      <img src="../assets/icon-cart.png">
      <span>{{0}}</span>
    </div>
  </nav>
</template>

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
  }
</style>
