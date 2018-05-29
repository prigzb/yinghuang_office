<template>
        <div id="page">
                <!-- 地图容器 -->
                <div id="container" class="map" tabindex="0"></div>
                <!-- 搜索框-->
                <div id="searchBox">
                    <input id="tipinput" type="input" placeholder="搜索英皇2公里内周边配套设施" />
                    <div id="clearSearchBtn">
                        <div class="del">&#10005;</div>
                    </div>
                </div>
                <!-- 结果面板 -->
                <div id="panel" class="hidden">
                    <!-- 隐藏按钮 -->
                    <a id="showHideBtn"></a>
                    <div id="emptyTip">没有内容！</div>
                    <!--搜索结果列表 -->
                    <div id="poiList">
                    </div>
                </div>
                <!-- loading -->
                <div id="loader"></div>
        </div>
</template>

    
<script type="text/javascript">
//    <!--引入jsapi -->
/*eslint-disable no-undef */
XuntongJSBridge.call("setWebViewTitle", { title: "周边配套" });
import AMap from "AMap";
export default {
  name: "page",
  mounted: function() {
    this.init();
    console.log("开始");
  },
  methods: {
    init: function() {
      //创建地图
      var map = new AMap.Map("container", {
        resizeEnable: true,
        zoom: 12,
        center: [116.444511, 39.908175],
        keyboardEnable: false
      });
      //制作图标
      var img1 = require("../assets/map.png");
      var icon = new AMap.Icon({
        image: img1,
        size: new AMap.Size(32, 32)
      });
      var marker = new AMap.Marker({
        icon: icon,
        position: [116.444511, 39.908175],
        cursor: "pointer",
        // content: "<div class='zhongxin'>葛洲坝地产北京总部</div>",
        title: "葛洲坝地产",
        offset: new AMap.Pixel(-10, 0),
        map: map
      });
      //加载PlaceSearch和Autocomplete插件
      AMap.plugin(
        ["AMap.PlaceSearch", "AMap.Autocomplete", "AMap.ToolBar"],
        function() {
          try {
            ready();
          } catch (e) {
            console.error(e);
          }
        }
      );

      function ready() {
        map.addControl(new AMap.ToolBar());
        //搜索框支持自动完成提示
        var auto = new AMap.Autocomplete({
          city: "北京",
          input: "tipinput"
        });

        //构造地点查询类
        var placeSearch = new AMap.PlaceSearch({
          pageSize: 5,
          type: "",
          pageIndex: 1,
          city: "北京",
          map: map,
          panel: "poiList"
        });

        //监听搜索框的提示选中事件
        AMap.event.addListener(auto, "select", function(e) {
          //设置搜索的城市
          placeSearch.setCity(e.poi.adcode);
          //设置中心点
          var cpoint = [116.444495, 39.908166];
          //开始搜索对应的poi名称
          placeSearch.searchNearBy(e.poi.name, cpoint, 2000, function(
            status,
            results
          ) {
            console.log(results.pois);
            if (results.pois && results.pois.length > 0) {
              $("#panel").toggleClass("empty");
            }

            //显示结果列表
            $("#panel").removeClass("hidden");

            //隐藏loading状态
            $(document.body).removeClass("searching");
          });

          //显示loading状态
          $(document.body).addClass("searching");
        });

        //检查结果列表是否为空， 为空时显示必要的提示，即#emptyTip
        function checkPoiList() {
          $("#panel").toggleClass("empty", !$.trim($("#poiList").html()));
        }

        checkPoiList();

        //监听搜索列表的渲染完成事件
        AMap.event.addListener(placeSearch, "renderComplete", function() {
          checkPoiList();
        });

        //监听marker/列表的选中事件
        AMap.event.addListener(placeSearch, "selectChanged", function(results) {
          //获取当前选中的结果数据
          console.log(results.selected.data);
        });

        $("#showHideBtn").click(function() {
          $("#panel").toggleClass("hidden");
        });

        $("#clearSearchBtn").click(function() {
          //清除搜索框内容
          $("#tipinput").val("");

          //清除结果列表
          placeSearch.clear();
          $("#panel").addClass("hidden");
          checkPoiList();
        });
      }
    }
  }
};
</script>
<style scoped>
@import "./../assets/index.css";
</style>

