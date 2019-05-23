<template>
  <div>
    <NavBar />
    <div class="articles-wrapper">
      <h2>Latest Arrivals</h2>
      <ul class="article-list" v-for='(img, index) in imgUrlList' :key='img+index'>
        <img v-show="isLoaded" :src='img' @load="changeLoadStatus" />
        <div class="loading" v-if="!isLoaded">
          <PulseLoader :loading='!isLoaded' />
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

export default {
  components: {
    NavBar,
    PulseLoader,
  },
  data() {
    return {
      imgUrlList: Array(3).fill('https://source.unsplash.com/random/300x200'),
      isLoaded: false,
    };
  },
  methods: {
    changeLoadStatus() {
      this.isLoaded = !this.isLoaded;
    }
  },
};
</script>


<style scoped>
  .articles-wrapper {
    padding: 1rem;
  }
  h2 {
    letter-spacing: 0.25rem;
    color: rgba(0,0,0,0.6);
    text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3);
  }
  .article-list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .loading {
    display: flex;
    align-items: center;
    height: 200px;
  }
</style>
