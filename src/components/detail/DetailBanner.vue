<template>
  <div>
    <div class="banner" @click="handleClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont back-icon">&#xe692;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery 
        :imgList="gallaryImgs" 
        @close="handleClose" 
        v-show="isShow"
      >
      </common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'Banner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
  },
  data () {
    return {
      isShow: false,
    }
  },
  methods: {
    handleClick () {
      this.isShow = true
    },
    handleClose () {
      this.isShow = false
    }
  },
  components: {
    CommonGallery,
    FadeAnimation,
  }
}

</script>
<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        padding 0 .2rem
        font-size .32rem
      .banner-number
        padding 0 .4rem
        line-height .32rem
        height .32rem
        border-radius .2rem
        background rgba(0, 0, 0, 0.8)
        font-size .24rem
        margin-top .14rem
        .back-icon
          font-size .24rem

</style>