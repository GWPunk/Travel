<template>
  <div>
    <div div class="header">
      <div>城市选择</div>
      <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}

</script>
<style lang="stylus" scoped>
   @import '~styles/varibles.styl' 
  .header
    position relative
    overflow hidden
    height $headerHeight
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