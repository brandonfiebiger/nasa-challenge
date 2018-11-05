<template>
  <div class="hello">
    <h1>Nasa Pics!</h1>
    <img v-bind:src="selectedPhoto"/>
    <button v-on:click="todayToggle">Today's Photo</button>
    <button v-on:click="yesterdayToggle">Yesterday's Photo</button>
  </div>
</template>

<script>
import { apiKey } from '../../keys/keys.js';
import date from 'date-and-time';

let now = new Date();
let yesterday = date.addDays(now, -1);
yesterday = date.format(yesterday, 'YYYY-MM-DD');
console.log(yesterday);
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
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
  created: function() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(response => response.json())
    .then(image => {
      this.todaysPhoto = image.url;
    })
    .catch(error => console.log(error))
    
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${yesterday}`)
    .then(response => response.json())
    .then(image => {
      this.selectedPhoto = image.url;
        this.yesterdaysPhoto = image.url
        console.log(image.url)
      })
      .catch(error => console.log(error))
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
</style>
