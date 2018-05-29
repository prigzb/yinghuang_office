<template>
  <div class="gzbfdc">
    <div class="container">
        <!-- <my-video :sources="video.sources" :options="video.options" style="padding-top:20px;"></my-video> -->
        <div class="carsol">
            <ic-slider :autoplay="3000">
              <ic-slider-item v-for="items in images" :key="items.id">
                <img :src="items.picUrl"/>
              </ic-slider-item>
            </ic-slider>
        </div>
        <div class="box">
          <router-link to="/bangonggaikuang">
              <div class="box-item box1">
                <div class="box_container">
                  <div class="round_container round1">
                    <span class="icon1"></span>
                  </div>
                  <p>办公概况</p>
                </div>        
              </div>
          </router-link>
          <router-link to="/zhoubianpeitao">         
              <div class="box-item box2">
                <div class="box_container">
                  <div class="round_container round2">
                    <span class="icon2"></span>
                  </div>
                  <p>周边配套</p>
                </div>    
              </div>
          </router-link>
          <router-link to="/zhedie">         
              <div class="box-item box3">
                <div class="box_container">
                  <div class="round_container round3">
                    <span class="icon3"></span>
                  </div>
                  <p>协议酒店</p>
                </div>    
              </div>
          </router-link>
          <router-link to="/kongjianbuju">         
              <div class="box-item box4">
                <div class="box_container">
                  <div class="round_container round4">
                    <span class="icon4"></span>
                  </div>
                  <p>办公布局</p>
                </div>    
              </div>
          </router-link>
          <router-link to="/shitangcanyin">         
              <div class="box-item box5">
                <div class="box_container">
                  <div class="round_container round5">
                    <span class="icon5"></span>
                  </div>
                  <p>食堂餐饮</p>
                </div>    
              </div>
          </router-link>
          <router-link to="">         
              <div class="box-item box6">
                <div class="box_container">
                  <div class="round_container round6">
                    <span class="icon6"></span>
                  </div>
                  <p>待开发...</p>
                </div>    
              </div>
          </router-link>
          <div style="clear:both;"></div>
        </div>
        <!-- <div style="width:100%;height:60px;" class="botpic"></div>      -->
    </div>
  </div>
</template>

<script>
import myVideo from "vue-video";
import IcSlider from "./comps/slider";
import IcSliderItem from "./comps/slider-item";

const img1 = require("../assets/huiyishi.jpg");
const img2 = require("../assets/gongwei.jpg");
const img3 = require("../assets/daping.jpg");
// const movie1= require("../../static/oceans.mp4")
export default {
  name: "HelloWorld",
  data() {
    return {
      video: {
        sources: [
          {
            src: "../../static/oceans.mp4",
            type: "video/mp4"
          }
        ],
        options: {
          autoplay: false,
          volume: 0.6,
          poster: "http://covteam.u.qiniudn.com/poster.png"
        }
      },
      images: [
        {
          linkUrl: "http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE",
          picUrl: img1,
          id: 11351
        },
        {
          linkUrl: "",
          picUrl: img2,
          id: 11372
        },
        {
          linkUrl: "http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz",
          picUrl: img3,
          id: 11378
        }
      ]
    };
  },
  components: {
    // myVideo,
    IcSlider,
    IcSliderItem
  },
  methods: {
    routeTo(item) {
      this.$router.push(item.link);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.gzbfdc {
  margin: 0 auto;
  text-align: center;
}
a,
li {
  list-style: none;
  text-decoration: none;
  text-align: center;
}
/* 四宫格标签 */
.box {
  width: 100%;
  margin: 2% 0 2% 0;
}

.box-item {
  /* display: inline-block; */
  float: left;
  width: 46%;
  /* padding-bottom: 30%; */
  background: orange;
  margin: 2%;
  border-radius: 15%;
}
.box_container {
  margin: 0 auto;
  width: 60%;
  text-align: center;
}
.box_container > .round_container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  margin: 4px auto;
}
.box_container > .round_container > span {
  display: inline-block;
  width: 80%;
  height: 80%;
  position: absolute;
  background-size: 100% auto;
  left: 11%;
  top: 12%;
}
.box_container > p {
  margin-top: 3%;
  font-size: 1.3rem;
}
span[class="icon1"] {
  background: url("../assets/office.png") no-repeat;
}
span[class="icon2"] {
  background: url("../assets/near.png") no-repeat;
}
span[class="icon3"] {
  background: url("../assets/hotel.png") no-repeat;
}
span[class="icon4"] {
  background: url("../assets/buju.png") no-repeat;
}
span[class="icon5"] {
  background: url("../assets/canyin.png") no-repeat;
}
span[class="icon6"] {
  background: url("../assets/kaifa.png") no-repeat;
}
.box1 {
  background-color: #c3d5ea;
}
.box2 {
  background-color: #e7e2ae;
}
.box3 {
  background-color: #efd3bc;
}
.box4 {
  background-color: #f79fc5;
}
.box5 {
  background-color: #88f173;
}
.box6 {
  background-color: #6692f3;
}
.round1 {
  background-color: #3a75ea;
}
.round2 {
  background-color: #f1dc65;
}
.round3 {
  background-color: #d5884a;
}
.round4 {
  background-color: #c7606d;
}
.round5 {
  background-color: grey;
}
.round6 {
  background-color: #da85dd;
}

/* 小草 */
.botpic {
  background: url("../../static/xiaocao.png") repeat;
  background-size: 100% auto;
  clear: both;
}
</style>
