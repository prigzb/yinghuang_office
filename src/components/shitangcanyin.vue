<template>
    <div class="market">
        <h2>大厦食堂-长风泉水餐饮公司</h2>
        <p>经与英皇集团沟通，将在楼下食堂为我公司独立划片区，为我公司提供自助用餐。提供早餐、中餐。早餐为大厦食堂提供，自点式模式；午餐为自助模式，每餐30元/人。晚餐原则上不提供，只能在有大型活动的时候提前2天提出申请，对方按照我们的需求及时间提前准备。餐费与原来一样，提前打入餐卡中，此卡还可以消费除自助餐以外的其他大排档小吃等。属于一卡通消费卡。</p>
        <img :src="url1" preview="0" preview-text="美食1">
        <img :src="url2" preview="0" preview-text="美食2">
    </div>
</template>

<script>
XuntongJSBridge.call("setWebViewTitle", { title: "食堂餐饮" });
var img1 = require("../assets/food1.png");
var img2 = require("../assets/food2.png");
export default {
  name: "bangonggaikuang",
  data() {
    return {
      url1: img1,
      url2: img2
    };
  }
};
</script>
<style  scoped>
.market {
  margin: 2% 2%;
}
.market > p {
  text-align: left;
  text-indent: 1.6rem;
}
.market > img {
  width: 100%;
  height: auto;
}
</style>


