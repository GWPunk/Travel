<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">{{city}}
      <span class="iconfont arrow-icon">&#xe64a;</span></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    city: String
  }
}

</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl' 
  /* 1rem = html的font-size = 50px 
  移动端1px为实际的2px*/
  .header 
    display: flex;
    background: $bgColor;
    line-height: 0.86rem;
    color: #fff
    .header-left
      width: 0.64rem;
      float: left;
      .back-icon
        text-align: center;
        font-size: .3rem
    .header-input
      background:#fff;
      height: .64rem;
      line-height: .64rem;
      padding-left: .2rem
      margin-top: .12rem;
      margin-left: .2rem;
      flex: 1;
      border-radius: .1rem;
      color: #ccc;
    .header-right
      width: 1.24rem;
      float: right;
      text-align: center; 
      .arrow-icon
        font-size: .24rem
        margin-left: -0.04rem
   
  
  // .header {
  //   display: flex;
  //   background: #00bcd4;
  //   line-height: 0.86rem;
  //   color: #fff
  // }
  // .header .header-left {
  //   /* background: orange; */
  //   width: 0.64rem;
  //   float: left;
  // }
  // .header .header-input {
  //   background:#fff;
  //   height: .64rem;
  //   line-height: .64rem;
  //   margin-top: .12rem;
  //   margin-left: .2rem;
  //   flex: 1;
  //   border-radius: .1rem;
  //   color: #ccc;
  // }
  // .header .header-right {
  //   /* background: orange; */
  //   width: 1.24rem;
  //   float: right;
  //   text-align: center;
  // }
    
</style>