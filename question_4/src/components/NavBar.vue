<template>
  <nav>
    <div class="navabar-logo">
      <img src="../assets/logo-shop.png">
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
  }
  .navbar-actions {
    position: relative;
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
