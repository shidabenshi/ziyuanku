<template>
  <div id="app">

    <router-view/>
    <van-tabbar v-model="active" route active-color='deeppink'>
      <van-tabbar-item icon="home-o" :to="{name:'Home'}">标签</van-tabbar-item>
      <van-tabbar-item icon="search" :to="{name:'List'}">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" :to="{name:'Shop'}">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" :to="{name:'Suer'}">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
