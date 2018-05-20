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
              <div class="box-item box4">
                <div class="box_container">
                  <div class="round_container round4">
                    <span class="icon4"></span>
                  </div>
                  <p>食堂餐饮</p>
                </div>    
              </div>
          </router-link>
          <router-link to="">         
              <div class="box-item box4">
                <div class="box_container">
                  <div class="round_container round4">
                    <span class="icon4"></span>
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

const img1 = require("../assets/pic1.jpg");
const img2 = require("../assets/pic2.jpg");
const img3 = require("../assets/pic3.jpg");
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
          picUrl:
            "http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg",
          id: 11351
        },
        {
          linkUrl:
            "https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian",
          picUrl:
            "http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg",
          id: 11372
        },
        {
          linkUrl: "http://y.qq.com/w/album.html?albummid=001tftZs2RX1Qz",
          picUrl:
            "http://y.gtimg.cn/music/photo_new/T003R720x288M00000236sfA406cmk.jpg",
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
  background: url("../assets/office.png") no-repeat;
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
  background-color: #e8d3dc;
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

/* 小草 */
.botpic {
  background: url("../../static/xiaocao.png") repeat;
  background-size: 100% auto;
  clear: both;
}
</style>
