<template>
  <div id="app">
    <Picture />
  </div>
</template>

<script>
import Picture from './components/Picture.vue';

export default {
  name: 'app',
  components: {
    Picture
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: url('https://d2r55xnwy6nx47.cloudfront.net/uploads/2018/08/TidalDisruptions_A_1440x810.gif');
  background-size: cover;
  background-repeat:  no-repeat;
}
</style>
