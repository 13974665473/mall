<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <div>name1</div>
    <div>name2</div>
    <div>name3</div>
    <div>name4</div>
    <div>name5</div>
    <div>name6</div>
    <div>name7</div>
    <div>name8</div>
    <div>name9</div>
    <div>name10</div>
  </div>
</template>

<script>
import DetailNavBar from './DetailNavBar'
import DetailSwiper from './DeatailSwiper'
import DetailBaseInfo from './DetailBaseInfo'
import DetailShopInfo from './DetailShopInfo'
import {getDetail, Goods, Shop} from '@/network/detail'
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {}
    };
  },
  created() {
    //保存传入的id
    this.id = this.$route.params.iid;
    //根据id请求详情数据
    getDetail(this.id).then(res => {
      // 获取顶部的图片轮播数据
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
      // 创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);
    }) 
  },
};
</script>

<style scoped>
</style>