<template>
  <div id="classify">
    <nav-bar class="classify-nav"><div slot="center">商品分类</div></nav-bar>
    <tab-control :title="['裙子', '内衣', '女鞋', '男友','包包', '运动','配饰', '美妆','个护', '家具','百货', '母婴','食品']"
              class="control"></tab-control>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/TabControl'
export default {
  name: "Classify",
  components: {
    NavBar,
    TabControl
  }
};
</script>

<style scoped>
  .classify-nav {
    background: #FF8E97;
    color: white;
  }
  .control {
    display: block;
    background: #F7F5F7;
    text-align: left;
    border-bottom: 0;
  }
</style>