<template>
  <div>
   <banner></banner>
   <detail-header></detail-header>
   <div class="content"></div>
  </div>
</template>

<script>
import Banner from './Banner'
import DetailHeader from './DetailHeader'
export default {
  name: 'Detail',
  components: {
    Banner,
    DetailHeader,
  }
}

</script>
<style scoped>
  .content {
    height: 30rem;
  }
</style>