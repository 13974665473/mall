<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt />
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.sells | sellCountFilter}}</div>
          <div>总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}">
              <span>{{item.isBetter ? '高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  filters: {
    sellCountFilter(value) {
      if(value < 10000) return value;
      return (value/10000).toFixed(1) + '万';
    }
  }
};
</script>

<style scoped>
  .shop-info {
    padding: 15px 5px;
    font-size: 12px;
    color: black;
    border-bottom: 4px solid rgba(128, 128, 128, 0.1);
  }
  .shop-top {
    font-size: 17px;
  }
  .shop-top img {
    height: 45px;
    width: 45px;
    margin-right: 7px;
    vertical-align: middle;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }
  .shop-middle {
    display: flex;
    margin-top: 10px;
    align-items: center;
  }
  .shop-middle-item {
    flex: 1;
  }
  .shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }
  .sells-count, .goods-count {
    margin-bottom: 7px;
    font-size: 15px;
  }
  .shop-middle-right table {
    width: 120px;
    margin-left: 25px;
  }
  .shop-middle-right table td {
    padding: 5px 0;
  }
  .shop-middle-right .score {
    color: #5ea732;
  }
  .shop-middle-right .score-better {
    color: #f13e3a;
  }
  .shop-middle-right .better span {
    background-color: #5ea732;
    color: white;
    text-align: center;
  }
  .shop-middle-right .better-more span {
    background-color: #f13e3a;
  }
  .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }
  .enter-shop {
    display: inline-block;
    width: 150px;
    height: 30px;
    background-color: #F4F4FA;
    font-size: 14px;
    line-height: 30px;
    border-radius: 10px;
  }
</style>