<template>
  <ul class="list">
    <li 
      class="item" 
      v-for="item in letters" 
      :key="item"
      :ref="item"
      @touchstart="hangleTouchStart"
      @touchmove="hangleTouchMove"
      @touchend="hangleTouchEnd"
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
    hangleTouchStart () {
      this.isTouch = true
    },
    hangleTouchMove (e) {
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
    hangleTouchEnd () {
      this.isTouch = false
    },
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