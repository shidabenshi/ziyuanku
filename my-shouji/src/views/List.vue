<template>
  <div class="home">
    <h2>列表页</h2>
    <van-card v-for="movies in movies" :key="movies.id"
     :desc="movies.type"
     :title="movies.title"
     :thumb="movies.image"
     :thumb-link="'#/Ssss?id='+movies.id"
     />
  </div>
</template>

<script>
import {getComingSoon} from '../services/movies'

export default {
  name: "List",
  data(){
    return{
      movies:[]
    }
  },
  created() {
   getComingSoon().then(res=>{
      console.log(res.data.attention)
      this.movies=res.data.attention
   })
  },
};
</script>
<style>
.home img{height: 100%;}
</style>
