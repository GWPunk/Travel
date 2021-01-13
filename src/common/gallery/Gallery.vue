<template>
  <div class="container" @click="handleClick">
    <div class="wrapper">
      <swiper ref="mySwiper" :options="swiperOptions" >
        <swiper-slide v-for="(item, index) in imgList" :key="index">
          <img class="swiper-img" :src="item">
        </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    </div>

  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgList: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('close')
    }
  }, 
}

</script>
<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    overflow hidden
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background #000
    .wrapper
      width 100%
      height 0
      padding-bottom 100%
      .swiper-img
        width 100%
    .swiper-pagination
      bottom -1rem
      color #fff
</style>