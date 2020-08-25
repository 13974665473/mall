<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from '@/components/common/swiper/Swiper';
import SwiperItem from '@/components/common/swiper/SwiperItem';
export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    imageLoad() {
      if(!this.isLoad) {
        this.$emit('SwiperImageLoad')
        this.isLoad = true
      }
    }
  },
}
</script>

<style scoped>

</style>