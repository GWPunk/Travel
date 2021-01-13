<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
  
</template>

<script>
import HomeHeader from './Header'
import HomeSwiper from './Swiper'
import HomeIcons from './Icons'
import HomeRecommend from './Recommend'
import HomeWeekend from './Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      const content = res.data;
      // console.log(content);
      if(content.ret && content.data){
        const data = content.data;
        this.swiperList = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }

    }
  },
  mounted() {
    this.getHomeInfo()
  },
}

</script>
<style scoped>
  
</style>