<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) in pageList" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img"><img class="img-content" :src="item.imgUrl"></div>
          <p class="icon-content">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        autoplay: false
      },
    }
  },
  computed: {
    pageList() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if(!pages[page]){
          pages[page] = [];
        }
        pages[page].push(item);  
      });
      return pages
    }
  },
}

</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
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
        bottom: 0 
        height: 0.44rem
        line-height: 0.44rem
        text-align center
        color: $darkTextColor
        ellipsis()

</style>