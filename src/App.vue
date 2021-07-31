<template>
  <div>
    <Profile/>
  <div id="nav">
    <router-link to="/about">About</router-link> |
    <router-link to="/pengalaman">Pengalaman</router-link> |
    <router-link to="/tracker" >Tracker</router-link>
  </div>
  <hr>
  <router-view/>
  </div>
  <Footer/>
</template>

<script>
import Profile from './components/Profile.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Profile,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Allerta&display=swap');
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{
  background-color: #F1E9DE;
  font-family: Allerta;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin-top: 100px;
  margin-right: 1080px;
  display: block;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

hr{
  margin-left: 300px;
  margin-right: 800px;
  margin-top: 15px;
  margin-bottom: 20px;
  color: #1abc9c;
}
.container{
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn{
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus{
  outline: none;
}
.btn:active{
  transform: scale(0.98);
}
.btn-block{
  display: block;
  width: 100%;
}
</style>
