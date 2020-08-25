<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in title" :key="index">
      <span :class="{active: index === currentIndex}" @click="itemClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index);
    }
  },
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    margin-top: 5px;
    font-size: 15px;
  }
  .tab-control-item {
    flex: 1;
    margin-bottom: 3px;
  }
  .tab-control-item span {
    display: inline-block;
    padding: 5px;
  }
  .active {
    border-bottom: 3px solid var(--color-tint);
    background: white;
    color: var(--color-high-text);
  }
</style>