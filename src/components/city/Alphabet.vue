<template>
    <ul class="list" v-show="isShow">
      <li 
        class="item" 
        v-for="item in letters" 
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick"
        >
        {{item}}
      </li>
    </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  data () {
    return {
      isTouch: false,
      startY: 0,
      timer: null,
      isShow: true,
    }
  },
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = [];
      for (let key in this.cities) {
        letters.push(key)  
      }
      return letters
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.isTouch = true
    },
    handleTouchMove (e) {
      if(this.isTouch) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)  
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }  
        }, 16)   
      }
    },
    handleTouchEnd () {
      this.isTouch = false
    },
  },
  mounted() {
    //解决安卓端软键盘弹起导致absolute定位上移的问题
    const WIN_HEIGHT = window.innerHeight
    window.addEventListener('resize', () => {
      if(window.innerHeight < WIN_HEIGHT){
        this.isShow = false
      }else{
        this.isShow = true
      }
    })
  },
}

</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl' 
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center 
      color $bgColor
</style>