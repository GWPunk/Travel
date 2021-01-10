<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img"><img class="img-content" src="//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"></div>
      <p class="icon-content">热门景点</p>
    </div>
    <div class="icon">
      <div class="icon-img"><img class="img-content" src="//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"></div>
      <p class="icon-content">热门景点</p>
    </div>
    <div class="icon">
      <div class="icon-img"><img class="img-content" src="//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"></div>
      <p class="icon-content">热门景点</p>
    </div>
    <div class="icon">
      <div class="icon-img"><img class="img-content" src="//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"></div>
      <p class="icon-content">热门景点</p>
    </div>
    <div class="icon">
      <div class="icon-img"><img class="img-content" src="//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"></div>
      <p class="icon-content">热门景点</p>
    </div>
    <div class="icon">
      <div class="icon-img"><img class="img-content" src="//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"></div>
      <p class="icon-content">热门景点</p>
    </div>
    <div class="icon">
      <div class="icon-img"><img class="img-content" src="//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"></div>
      <p class="icon-content">热门景点</p>
    </div>
    <div class="icon">
      <div class="icon-img"><img class="img-content" src="//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"></div>
      <p class="icon-content">热门景点</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}

</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .icons
    overflow hidden
    height: 0
    padding-bottom: 50% 
    .icon
      position relative
      float left
      overflow hidden
      height: 0
      width: 25%
      padding-bottom: 25% 
      .icon-img
        position absolute
        top: 0
        left: 0 
        right: 0 
        bottom: .44rem
        box-sizing border-box //css3内容
        padding .1rem
        .img-content
          display block
          margin: 0 auto 
          height: 100%
      .icon-content
        position absolute
        left: 0 
        right: 0 
        bottom: 0.2rem
        height: 0.44rem
        line-height: 0.44rem
        text-align center
        color: $darkTextColor

</style>