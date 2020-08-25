<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from './components/content/MainTabBar'

  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>
<style>
  @import "./assets/css/base.css";
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .main-tab-bar {
    position: relative;
    bottom: 0;
    z-index: 5;
  }
</style>
