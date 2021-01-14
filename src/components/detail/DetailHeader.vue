<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-abs" v-show="isShow">
      <div class="iconfont back-abs-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!isShow" :style="styleOpacity">
      <div>景点详情</div>
      <router-link tag="div" to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isShow: true,
      styleOpacity: {
        opacity: 0
      }
    }
  },
  methods: {
    changeOpacity () {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 60) {
        let opacity = scrollTop / 140;
        opacity = (opacity > 1) ? 1 : opacity;
        this.styleOpacity = {opacity};
        this.isShow = false
      }else {
        this.isShow = true
      }
    }
  },
  activated() {
    window.addEventListener('scroll', this.changeOpacity)
  },
}

</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl' 
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width  .8rem
    height  .8rem
    border-radius .4rem
    line-height .8rem
    text-align center
    background rgba(0, 0, 0, 0.8)
    .back-abs-icon
      color #fff
      font-size .4rem
  .header-fixed
    position fixed
    left 0
    right 0
    top 0
    height $headerHeight
    overflow hidden
    background: $bgColor
    line-height: $headerHeight
    color: #fff
    text-align: center
    font-size: .32rem
    .back-icon
      position absolute
      left 0
      top 0
      width 0.64rem
      text-align: center;
      font-size: .3rem
      color #fff
</style>