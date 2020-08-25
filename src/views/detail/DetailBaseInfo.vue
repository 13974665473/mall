<template>
   <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="desc" v-if="goods.discount != ''">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .base-info {
    padding: 15px 6px 6px;
    font-size: 15px;
    color: black;
  }
  .info-price {
    position: relative;
    height: 30px;
    margin: 5px 0;
    font-size: 12px;
    line-height: 30px;
  }
  .info-price .new-price {
    color: var(--color-high-text);
    font-size: 20px;
  }
  .info-price .old-price {
    margin-left: 5px;
    color: var(--color-text);
    text-decoration: line-through;
  }
  .info-price .desc {
    position: absolute;
    display: inline-block;
    height: 20px;
    margin-left: 5px;
    background: var(--color-high-text);
    padding: 0 5px;
    color: white;
    border-radius: 7px;
    line-height: 20px;
  }
  .info-other {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid rgba(128, 128, 128, .1);
    font-size: 12px;
    color: var(--color-text);
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    font-size: 12px;
    border-bottom: 4px solid rgba(128, 128, 128, .1);
  }
  .info-service img {
    width: 0.62rem;
  }
</style>