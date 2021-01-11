<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wraper">
          <img class="item-img" :src="item.url">
        </div>
        
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001', 
          url: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          title: '京城周末撒欢',
          desc: '在帝都过周末，不仅仅是城中游！'
        },
        {
          id: '0002', 
          url: 'https://imgs.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
          title: '京城有好泉',
          desc: '细数北京温泉，温暖你的冬天'
        },
        {
          id: '0003', 
          url: 'https://imgs.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
          title: '京城溜娃必去',
          desc: '德智体美劳全面发展的亲子日，这些地方该去看看…'
        },
        {
          id: '0004', 
          url: 'https://imgs.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          title: '帝都必打卡',
          desc: '来北京必去的景点非这些地方莫属'
        },
        {
          id: '0005', 
          url: 'https://imgs.qunarzz.com/sight/p0/1809/5e/5e12e987c04b8394a3.img.jpg_200x200_eb397645.jpg',
          title: '南宫旅游景区',
          desc: '地热资源丰富，温泉纯正，体验绝佳'
        },
        {
          id: '0006', 
          url: 'https://imgs.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          title: '寻找北京的皇城范儿',
          desc: '数百年的宫廷庙宇，至今依旧威严霸气'
        },
      ]
    }
  }
}

</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    // height .8rem
    line-height .8rem
    background #eee
    margin-top .2rem
    text-indent .2rem
  .item-img-wraper
    overflow hidden
    height 0
    padding-bottom 33%
    .item-img
      width 100%
  .item-info
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #ccc
      ellipsis()
</style>