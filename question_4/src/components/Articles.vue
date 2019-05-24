<template>
  <div>
    <NavBar />
    <h2>Latest {{gender}} Arrivals</h2>
    <div class="articles-wrapper">
      <ul class="article-list" v-for='(img, index) in imgUrlList' :key='img+index'>
        <div class="article">
          <img v-show='isLoaded' :src='img' @load='changeLoadStatus' />
          <button @click='saveToCart(img)'>Add to Cart</button>
          <div class='loading' v-if='!isLoaded'>
            <PulseLoader :loading='!isLoaded' />
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import NavBar from './NavBar.vue';

export default {
  components: {
    NavBar,
    PulseLoader,
  },
  props: {
    gender: {
      type: String,
    },
  },
  created: function () {
    this.imgUrlList = Array(5).fill('https://source.unsplash.com/random/300x200');
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  methods: {
    changeLoadStatus() {
      this.isLoaded = !this.isLoaded;
    },
    saveToCart(img) {
      this.$store.dispatch({
        type: 'ADD_CART',
        payload: img,
      });
    },
  },
};
</script>


<style scoped>
  .articles-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 1rem;
  }
  .article-list {
    display: flex;
    align-items: center;
    min-width: 25vw;;
  }
  .article {
    display: flex;
    flex-direction: column;
  }
  .loading {
    display: flex;
    align-items: center;
    height: 200px;
  }
  h2 {
    letter-spacing: 0.25rem;
    color: rgba(0,0,0,0.6);
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3);
  }
  img {
    padding: 0.5rem 0;
  }
  button {
    display: flex;
    align-items: center;
    height: 2rem;
    color: #34495e;
    font-weight: bold;
    text-transform: uppercase;
    background: #ffffff;
    padding: 0.4rem;
    border: 2px solid#bc9ac0;
    border-radius: 6px;
    display: inline-block;
  }
  button:hover {
    color: #494949;
    cursor: pointer;
    border-radius: 50px;
    border-color: #494949;
    transition: all 0.3s ease 0s;
  }
  button:focus {
    outline: none;
  }
</style>
