<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img class="swiper-img" :src="item.url">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
  
</template>


<script>
export default {
  name: 'HomeSwiper',
  data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true
        },
        swiperList: [{id: 'img1', url: '//imgs.qunarzz.com/vs_ceph_vcimg/f7813c9431796cc32ae7b7a78447342e.jpeg'},
                     {id: 'img2', url: '//imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg'}]
      }
    },
}

</script>
<style lang="stylus" scoped>
  .wrapper    
    overflow hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    .swiper-img
      width: 100%;
</style>