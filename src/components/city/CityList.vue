<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wraper">
            <div class="city-button">{{this.city}}</div>
          </div>
        </div>

      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div 
            class="button-wraper" 
            v-for="item in hot" 
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="city-button">{{item.name}}</div>
          </div>
        </div>    
      </div>

      <div 
        class="area" 
        v-for="(item, key) in cities" 
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="city-list">
          <div 
            class="city border-bottom" 
            v-for="innerItem in item" 
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'CityList',
  data () {
    return {
      scroll: null
    }
  },
  props: {
    cities: Object,
    hot: Array,
    letter: String,
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapActions(['changeCity'])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper) 
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }      
    }
  }
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
    .city-list 
      .city
        line-height .76rem
        padding-left .2rem

  
</style>