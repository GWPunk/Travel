<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyword" class="search-input" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li 
          class="search-item border-bottom" 
          v-for="item in list" 
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}</li>
      </ul>
      <div class="search-item border-bottom" v-show="hasNodata">没有找到匹配的项</div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapActions} from 'vuex'

export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null,
    }
  },
  props: {
    cities: Object
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapActions(['changeCity'])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search, {
      click: true, // 处理在better-scroll在安卓手机上不能点击的问题
      tap: true,
    }) 
  },
  computed: {
    hasNodata () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = [];
      }
      this.timer = setTimeout(() => {
        const results = [];
        for (let i in this.cities) {
          this.cities[i].forEach((item) => {
            if ((item.spell.indexOf(this.keyword) > -1) || (item.name.indexOf(this.keyword) > -1)) {
              results.push(item)
            } 
          });
        }
        this.list = results
      }, 100)
    }
  },
}

</script>
<style lang="stylus" scoped>
   @import '~styles/varibles.styl' 
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      box-sizing border-box
      height .62rem
      line-height .62rem
      padding 0 .1rem
      color #666
      width 100%
      text-align center
      border-radius 0.06rem
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    background #eee
    .search-item
      line-height .62rem
      background #fff
      color #666
      padding-left 0.2rem
</style>