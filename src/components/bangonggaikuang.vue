<template>
     <div class="bggk">
         <img :src="url1" preview="0" preview-text="配套1">
         <img :src="url2" preview="0" preview-text="配套2">
         <img :src="url3" preview="0" preview-text="配套3">
     </div>
</template>
<script>
  
 
  var img1=require("../assets/bg1.png")
  var img2=require("../assets/bg2.png")
  var img3=require("../assets/bg3.png")
   export default{
      name:"bangonggaikuang",
      data(){
        return {
          url1:img1,
          url2:img2,
          url3:img3
        }
      }
   }
</script>
<style>
   .bggk img{
      width:100%;
   }
</style>

