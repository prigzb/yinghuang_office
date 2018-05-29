<template>
     <div class="bggk">
         <img :src="url1" preview="0" preview-text="配套1">
         <img :src="url2" preview="0" preview-text="配套2">
         <img :src="url3" preview="0" preview-text="配套3">
         <img :src="url4" preview="0" preview-text="配套4">
         <img :src="url5" preview="0" preview-text="配套5">
         <img :src="url6" preview="0" preview-text="配套6">
         <img :src="url7" preview="0" preview-text="配套7">
         <img :src="url8" preview="0" preview-text="配套8">
         <img :src="url9" preview="0" preview-text="配套9">
         <img :src="url10" preview="0" preview-text="配套10">
         <img :src="url11" preview="0" preview-text="配套11">
         <img :src="url12" preview="0" preview-text="配套12">
         <img :src="url13" preview="0" preview-text="配套13">
         <img :src="url14" preview="0" preview-text="配套14">
     </div>
</template>
<script>
var img1 = require("../assets/bg1.png");
var img2 = require("../assets/bg2.png");
var img3 = require("../assets/bg3.png");
var img4 = require("../assets/bangong/ban1.jpg");
var img5 = require("../assets/bangong/ban2.jpg");
var img6 = require("../assets/bangong/ban3.jpg");
var img7 = require("../assets/bangong/ban4.jpg");
var img8 = require("../assets/bangong/ban5.jpg");
var img9 = require("../assets/bangong/ban6.jpg");
var img10 = require("../assets/bangong/ban7.jpg");
var img11 = require("../assets/bangong/ban8.jpg");
var img12 = require("../assets/bangong/ban9.jpg");
var img13 = require("../assets/bangong/ban10.jpg");
var img14 = require("../assets/bangong/ban11.jpg");
export default {
  name: "bangonggaikuang",
  data() {
    return {
      url1: img1,
      url2: img2,
      url3: img3,
      url4: img4,
      url5: img5,
      url6: img6,
      url7: img7,
      url8: img8,
      url9: img9,
      url10: img10,
      url11: img11,
      url12: img12,
      url13: img13,
      url14: img14
    };
  }
};
</script>
<style>
.bggk img {
  width: 95%;
  height: auto;
}
</style>

