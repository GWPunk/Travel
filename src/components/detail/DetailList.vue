<template>
  <div>
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-child">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}

</script>
<style lang="stylus" scoped>

  .item-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
  .item-title
    height .8rem
    line-height .8rem
    padding 0 .2rem
    font-size .32rem
  .item-child
    padding: 0 .2rem

</style>