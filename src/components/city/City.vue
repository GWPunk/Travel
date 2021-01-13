<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hot="hotCities" :cities="cities" :letter="letter"></city-list>
    <alphabet :cities="cities" @change="handleLetterChange"></alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import Alphabet from './Alphabet'
import CityHeader from './CityHeader'
import CityList from './CityList'
import CitySearch from './CitySearch'

export default {
  name: 'City',
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Alphabet,  
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/city.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      const content = res.data;
      // console.log(content);
      if(content.ret && content.data){
        const data = content.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterChange (letter) {
      this.letter = letter     
    }
  },
  mounted() {
    this.getHomeInfo()
  },
}

</script>
<style scoped>
  


</style>