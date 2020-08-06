<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="./assets/img/home.png">
        <img slot="item-icon-active" src="./assets/img/home-active.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/classify">
        <img slot="item-icon" src="./assets/img/classify.png">
        <img slot="item-icon-active" src="./assets/img/classify-active.png">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shop">
        <img slot="item-icon" src="./assets/img/shop.png">
        <img slot="item-icon-active" src="./assets/img/shop-active.png">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/user">
        <img slot="item-icon" src="./assets/img/user.png">
        <img slot="item-icon-active" src="./assets/img/user-active.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/TabBar'
  import TabBarItem from './components/TabBarItem'

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
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
</style>
