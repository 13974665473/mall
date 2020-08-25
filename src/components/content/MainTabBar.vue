<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="@/assets/img/common/home.png">
        <img slot="item-icon-active" src="@/assets/img/common/home-active.png">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/classify">
        <img slot="item-icon" src="@/assets/img/common/classify.png">
        <img slot="item-icon-active" src="@/assets/img/common/classify-active.png">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shop">
        <img slot="item-icon" src="@/assets/img/common/shop.png">
        <img slot="item-icon-active" src="@/assets/img/common/shop-active.png">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/user">
        <img slot="item-icon" src="@/assets/img/common/user.png">
        <img slot="item-icon-active" src="@/assets/img/common/user-active.png">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from '../common/tabbar/TabBar'
  import TabBarItem from '../common/tabbar/TabBarItem'
  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
}
</script>

<style scoped>

</style>