<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pageList" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img"><img class="img-content" :src="item.url"></div>
          <p class="icon-content">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '0001', 
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
          desc: '温泉'
        },
        {
          id: '0002', 
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/7c1e26fd490c3b65c2858fe5da96141c.png',
          desc: '滑雪运动'
        },
        {
          id: '0003', 
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/a9d33792bd961b1692638d86cf3e6b83.png',
          desc: '万龙滑雪场'
        },
        {
          id: '0004', 
          url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/5ffcd4a916f764f678263b27c1e2e00c.png',
          desc: '天坛公园'
        },
        {
          id: '0005', 
          url: '//img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          desc: '牛首山'
        },
        {
          id: '0006', 
          url: '//img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
          desc: '游乐场'
        },
        {
          id: '0007', 
          url: '//img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png',
          desc: '夫子庙'
        },
        {
          id: '0008', 
          url: '//img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          desc: '总统府'
        },
        {
          id: '0009', 
          url: '//img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
          desc: '夏日玩水'
        },
        {
          id: '0010', 
          url: '//img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          desc: '文化古迹'
        }                
      ]
    }
  },
  computed: {
    pageList() {
      const pages = [];
      this.iconList.forEach((item, index) => {
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
        padding-bottom 0
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