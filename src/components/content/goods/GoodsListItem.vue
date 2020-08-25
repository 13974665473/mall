<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.show.img" @load="iamgeLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">☆{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    iamgeLoad() {
      this.$bus.$emit('itemImageLoad');
    },
    itemClick() {
      this.$router.push('./detail/' + this.goodsItem.iid)
    }
  },
}
</script>

<style scoped>
  .goods-item {
    position: relative;
    padding-bottom: 40px;
    width: 48%;
    margin-top: 5px;
  }
  .goods-item img {
    width: 100%;
    border-radius: 6px;
  }
  .goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    font-size: 12px;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;     /*规定段落中的文本不进行换行*/
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
</style>