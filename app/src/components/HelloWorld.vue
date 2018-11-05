<template>
  <div class="hello">
    <h1>Nasa Pics!</h1>
    <img v-bind:src="message"/>
  </div>
</template>

<script>
  import { apiKey } from '../../keys/keys.js'
  
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      message: ''
    }
  },
  created: function() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(response => response.json())
      .then(image => this.message = image.url)
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
