<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="city-button">北京</div>
          </div>
        </div>

      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="city-button">北京</div>
          </div>
          <div class="button-wraper">
            <div class="city-button">北京</div>
          </div>
          <div class="button-wraper">
            <div class="city-button">北京</div>
          </div>
          <div class="button-wraper">
            <div class="city-button">北京</div>
          </div>
          <div class="button-wraper">
            <div class="city-button">北京</div>
          </div>
          <div class="button-wraper">
            <div class="city-button">北京</div>
          </div>
          <div class="button-wraper">
            <div class="city-button">北京</div>
          </div>
          <div class="button-wraper">
            <div class="city-button">北京</div>
          </div>
        </div>
        
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="city-list">
          <div class="city border-bottom">阿拉尔</div>
          <div class="city border-bottom">阿拉尔</div>
          <div class="city border-bottom">阿拉尔</div>
          <div class="city border-bottom">阿拉尔</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="city-list">
          <div class="city border-bottom">阿拉尔</div>
          <div class="city border-bottom">阿拉尔</div>
          <div class="city border-bottom">阿拉尔</div>
          <div class="city border-bottom">阿拉尔</div>
        </div>
        <div class="title border-topbottom">A</div>
        <div class="city-list">
          <div class="city border-bottom">阿拉尔</div>
          <div class="city border-bottom">阿拉尔</div>
          <div class="city border-bottom">阿拉尔</div>
          <div class="city border-bottom">阿拉尔</div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'CityList',
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
}

</script>
<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    position absolute
    left 0
    right 0
    top 1.58rem
    bottom 0
    overflow hidden
    .title
      background #eee
      font-size .26rem
      line-height .54rem
      padding-left .2rem
      color #666
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wraper
        float left
        width 33.33%
        .city-button
          margin .1rem
          text-align center
          border .02rem solid #ccc
          padding .1rem 0
          border-radius 0.06rem
    .city
      line-height .76rem
      padding-left .2rem

  
</style>