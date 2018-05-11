<template>
  <div id="app">
    <!-- <img src="./assets/gzblogo.png"> -->
    <router-view/>
    <!-- <lg-preview></lg-preview> -->
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
  /* padding: 0;
     margin: 0; */
}
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
}
/* img{
  width: 200px;
  height:auto;
} */
</style>
