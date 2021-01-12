<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <alphabet></alphabet>
  </div>
</template>

<script>
import Alphabet from './Alphabet'
import CityHeader from './CityHeader'
import CityList from './CityList'
import CitySearch from './CitySearch'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alphabet,  
  }
}

</script>
<style scoped>
  


</style>