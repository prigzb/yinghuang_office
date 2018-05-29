<template>
     <div class="bggk">
         <img v-lazy="item.imgurl" preview="0" preview-text="配套+index" v-for="(item,index) in listimg" :key="item.id">
     </div>
</template>
<script>
XuntongJSBridge.call("setWebViewTitle", { title: "办公概况" });
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
      listimg: [
        {
          imgurl: img1,
          id: 1
        },
        {
          imgurl: img2,
          id: 2
        },
        {
          imgurl: img3,
          id: 3
        },
        {
          imgurl: img4,
          id: 4
        },
        {
          imgurl: img5,
          id: 5
        },
        {
          imgurl: img6,
          id: 6
        },
        {
          imgurl: img7,
          id: 7
        },
        {
          imgurl: img8,
          id: 8
        },
        {
          imgurl: img9,
          id: 9
        },
        {
          imgurl: img10,
          id: 10
        },
        {
          imgurl: img11,
          id: 11
        },
        {
          imgurl: img12,
          id: 12
        },
        {
          imgurl: img13,
          id: 13
        },
        {
          imgurl: img14,
          id: 14
        }
      ]
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

