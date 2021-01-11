<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.url">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001', 
          url: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          title: '故宫',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        },
        {
          id: '0002', 
          url: 'https://imgs.qunarzz.com/sight/p0/1711/66/661d6a43e3e4dceda3.water.jpg_200x200_47eb3f51.jpg',
          title: '军都山滑雪场',
          desc: '军都山畅滑一季'
        },
        {
          id: '0003', 
          url: 'https://imgs.qunarzz.com/sight/p0/2010/ea/ea45e52a4e22851ca3.img.jpg_200x200_df8ffdaf.jpg',
          title: '北京欢乐谷',
          desc: '亚洲唯一飞行式过山车等你来挑战'
        },
        {
          id: '0004', 
          url: 'https://imgs.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_200x200_39faf9c6.jpg',
          title: '颐和园',
          desc: '中国现存最大的皇家园林'
        },
        {
          id: '0005', 
          url: 'https://imgs.qunarzz.com/sight/p0/1809/5e/5e12e987c04b8394a3.img.jpg_200x200_eb397645.jpg',
          title: '南宫旅游景区',
          desc: '地热资源丰富，温泉纯正，体验绝佳'
        },
        {
          id: '0006', 
          url: 'https://imgs.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_200x200_8eb33f07.jpg',
          title: '恭王府',
          desc: '一座恭王府，半部清代史'
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
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      margin .1rem
    .item-info
      flex 1
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
      .item-button
        line-height .44rem
        margin-top .16rem
        padding  0 .2rem
        background #ff9300
        border-radius .06rem
        color #fff
        

</style>