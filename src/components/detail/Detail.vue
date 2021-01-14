<template>
  <div>
   <detail-banner></detail-banner>
   <detail-header></detail-header>
   <detail-list :list="categoryList"></detail-list>
   <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './DetailBanner'
import DetailHeader from './DetailHeader'
import DetailList from './DetailList'
export default {
  name: 'Detail',
  data () {
    return {
      categoryList: [{
        "title": "成人票",
        "children": [{
          "title": "成人三馆联票",
          "children": [{
            "title": "成人三馆联票 - 某一连锁店销售"
          }]
        },{
          "title": "成人五馆联票"
        }]
      }, {
        "title": "学生票"
      }, {
        "title": "儿童票"
      }, {
        "title": "特惠票"
      }]
    }
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