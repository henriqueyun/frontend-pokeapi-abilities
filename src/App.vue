<template>
  <div id="app">
    <NavBar/>
    <router-view :key="$route.fullPath"/>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
export default {
  components: {
    NavBar
  },

  mounted () {
    if (window.location.hash !== '#/') {
      window.location.hash = '#/'
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Sintony&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Sintony', sans-serif;
}
</style>
