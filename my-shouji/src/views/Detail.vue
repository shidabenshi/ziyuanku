<template>
  <div class="home">
    <h2>{{movies.name}}</h2>
    <h2>{{movies.story}}</h2>
    <img :src="movies.img">
  <video controls :src="movies.video? movies.video.hightUrl:''"></video>
  </div>
</template>

<script>
import {getDetail}  from '../services/movies.js'
export default {
  name: 'Detail',
  data() {
    return {
      movies:[]
    }
  },
  created() {
    getDetail(this.$route.query.id).then(res=>{
      this.movies=res.data.data.basic
    })
    //console.log(this.$route.query.id)
  },
};
</script>
<style scoped>
.home img{width: 100%;height: 100%}
.home video{width: 100%}
</style>
