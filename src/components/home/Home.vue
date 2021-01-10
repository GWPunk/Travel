<template>
  <div>
    <Home-header></Home-header>
    <Home-swiper></Home-swiper>
  </div>
  
</template>

<script>
import HomeHeader from './Header'
import HomeSwiper from './HomeSwiper'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}

</script>
<style scoped>
  
</style>