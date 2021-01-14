<template>
  <div>
   <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
   <detail-header></detail-header>
   <detail-list :list="categoryList"></detail-list>
   <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './DetailBanner'
import DetailHeader from './DetailHeader'
import DetailList from './DetailList'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: [],
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
        
      })
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      const content = res.data;
      // console.log(content);
      if(content.ret && content.data){
        const data = content.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.categoryList = data.categoryList;
      }
    }
  },
  mounted() {
    this.getHomeInfo()
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  }
}

</script>
<style scoped>
  .content {
    height: 30rem;
  }
</style>