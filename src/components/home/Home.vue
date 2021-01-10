<template>
  <div>
    <Home-header></Home-header>
    <Home-swiper></Home-swiper>
    <Home-icons></Home-icons>
  </div>
  
</template>

<script>
import HomeHeader from './Header'
import HomeSwiper from './Swiper'
import HomeIcons from './Icons'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}

</script>
<style scoped>
  
</style>