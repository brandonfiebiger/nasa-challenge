<template>
  <div class="hello">
    <h1>Nasa Pics!</h1>
    <img v-bind:src="selectedPhoto"/>
    <span>
      <button v-on:click="todayToggle">Today's Photo</button>
      <button v-on:click="yesterdayToggle">Yesterday's Photo</button>
    </span>
  </div>
</template>

<script>
import { fetchTodaysImage, fetchYesterdaysImage } from '../utils/apiCalls.js';

export default {
  name: 'Picture',
  data() {
    return {
      todaysPhoto: '',
      yesterdaysPhoto: '',
      selectedPhoto: ''
    }
  },
  methods: {
    todayToggle: function() {
      this.selectedPhoto = this.todaysPhoto;
    },
    yesterdayToggle: function() {
      this.selectedPhoto = this.yesterdaysPhoto;
    }
  },
  created: async function() {
    this.todaysPhoto = await fetchTodaysImage()
    this.selectedPhoto = this.todaysPhoto;
    this.yesterdaysPhoto = await fetchYesterdaysImage()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  height: 45rem;
  width: 45rem;
  border-radius: 360px;
}

span {
  display: flex; 
  flex-direction: row;
}
</style>



