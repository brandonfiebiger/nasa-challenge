<template>
  <div id="app">
    <HelloWorld msg="hello"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { apiKey } from '../keys/keys.js';


export default {
  name: 'app',
  components: {
    HelloWorld
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
}
</style>
