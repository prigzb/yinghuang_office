<template>
  <div class="container_xieyi" style="width:100%;height:100%">
  <!-- <div style="font-size:20px;text-align:center;">葛洲坝公司订房协议酒店</div> -->
    <el-tabs type="border-card">
      <el-tab-pane label="协议酒店">
          <el-popover
            placement="right"
            width="250"
            trigger="click">
            <el-table 
            border
            :span-method="arraySpanMethod1"
            :data="tableData31[0].hotel1">
                <el-table-column
                  prop="style"
                  label="星级标准风格"
                  width="110">
                </el-table-column>
                <el-table-column
                  prop="room"
                  label="客房型"
                  width="300">
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="客房价格"
                  width="200">
                </el-table-column>
                <a href="tel:phone">
                  <el-table-column
                    prop="phone"
                    label="总机"
                    width="150">
                  </el-table-column>
                </a>
                <el-table-column
                  prop="linkman"
                  label="客房价格"
                  width="200">
                </el-table-column>
                <a href="tel:phone">
                  <el-table-column
                    prop="phone"
                    label="总机"
                    width="150">
                  </el-table-column>
                </a>
                <el-table-column
                  prop="address"
                  label="地址"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="distance"
                  label="距英皇中心距离"
                  width="300">
                </el-table-column>
            </el-table>
            <el-button slot="reference" type="primary" style="float:left;display:block;">{{tableData31[0].hotel1[0].name}}</el-button>
          </el-popover>
          <el-popover
            placement="right"
            width="250"
            trigger="click">
            <el-table 
            border
            :data="gridData">
               <el-table-column
                  prop="style"
                  label="星级标准风格"
                  width="110">
                </el-table-column>
                <el-table-column
                  prop="room"
                  label="客房型"
                  width="300">
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="客房价格"
                  width="200">
                </el-table-column>
                <a href="tel:phone">
                  <el-table-column
                    prop="phone"
                    label="总机"
                    width="150">
                  </el-table-column>
                </a>
                <el-table-column
                  prop="address"
                  label="地址"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="distance"
                  label="距英皇中心距离"
                  width="300">
                </el-table-column>
            </el-table>
            <el-button slot="reference" type="primary" style="float:left;display:block;clear:both;">酒店2</el-button>
          </el-popover>
      </el-tab-pane>
      <el-tab-pane label="非协议酒店">非协议酒店</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";
XuntongJSBridge.call("setWebViewTitle", { title: "协议酒店" });
export default {
  data() {
    return {
      tableData31: [],
      tableData41: [],
      gridData: [
        {
          style: "五星中国风",
          room: "豪华房（大床/双床）",
          price: "1400/1580",
          phone: "010-65052266",
          address: "北京建国门外大街甲一号",
          distance: "1.4公里步行预计21分钟"
        },
        {
          style: "五星中国风",
          room: "豪华阁豪华房（行政房大床/双床）",
          price: "1700/1880",
          phone: "010-65052266",
          address: "北京建国门外大街甲一号",
          distance: "1.4公里步行预计21分钟"
        }
      ]
    };
  },
  methods: {
    arraySpanMethod1({ row, column, rowIndex, columnIndex }) {
      if (columnIndex !== 1 && columnIndex !== 2) {
        console.log(0);
        if (rowIndex === 0) {
          return [2, 1];
        } else if (rowIndex === 1) {
          return [0, 0];
        }
        if (rowIndex === 3) {
          return [2, 1];
        } else if (rowIndex === 4) {
          return [0, 0];
        }
        if (rowIndex === 5) {
          return [5, 1];
        } else if (
          rowIndex === 6 ||
          rowIndex === 7 ||
          rowIndex === 8 ||
          rowIndex === 9
        ) {
          return [0, 0];
        }
        if (rowIndex === 10) {
          return [4, 1];
        } else if (rowIndex === 11 || rowIndex === 12 || rowIndex === 13) {
          return [0, 0];
        }
        if (rowIndex === 14) {
          return [2, 1];
        } else if (rowIndex === 15) {
          return [0, 0];
        }
        if (rowIndex === 16) {
          return [3, 1];
        } else if (rowIndex === 18 || rowIndex === 17) {
          return [0, 0];
        }
        if (rowIndex === 19) {
          return [3, 1];
        } else if (rowIndex === 20 || rowIndex === 21) {
          return [0, 0];
        }
        if (rowIndex === 22) {
          return [3, 1];
        } else if (rowIndex === 23 || rowIndex === 24) {
          return [0, 0];
        }
        if (rowIndex === 25) {
          return [2, 1];
        } else if (rowIndex === 26) {
          return [0, 0];
        }
        if (rowIndex === 27) {
          return [3, 1];
        } else if (rowIndex === 28 || rowIndex === 29) {
          return [0, 0];
        }
        if (rowIndex === 30) {
          return [2, 1];
        } else if (rowIndex === 31) {
          return [0, 0];
        }
      }
    },
    arraySpanMethod2({ row, column, rowIndex, columnIndex }) {},
    arraySpanMethod_undo({ row, column, rowIndex, columnIndex }) {
      if (columnIndex !== 3 && columnIndex !== 4) {
        console.log(0);
        if (rowIndex === 0) {
          return [4, 1];
        } else if (rowIndex === 1 || rowIndex === 2 || rowIndex === 3) {
          return [0, 0];
        }
        if (rowIndex === 5) {
          return [4, 1];
        } else if (rowIndex === 6 || rowIndex === 7 || rowIndex === 8) {
          return [0, 0];
        }
        if (rowIndex === 9) {
          return [6, 1];
        } else if (
          rowIndex === 10 ||
          rowIndex === 11 ||
          rowIndex === 12 ||
          rowIndex === 13 ||
          rowIndex === 14
        ) {
          return [0, 0];
        }
        if (rowIndex === 16) {
          return [2, 1];
        } else if (rowIndex === 17) {
          return [0, 0];
        }
        if (rowIndex === 18) {
          return [5, 1];
        } else if (
          rowIndex === 19 ||
          rowIndex === 20 ||
          rowIndex === 21 ||
          rowIndex === 22
        ) {
          return [0, 0];
        }
        if (rowIndex === 23) {
          return [7, 1];
        } else if (
          rowIndex === 24 ||
          rowIndex === 25 ||
          rowIndex === 26 ||
          rowIndex === 27 ||
          rowIndex === 28 ||
          rowIndex === 29
        ) {
          return [0, 0];
        }
        if (rowIndex === 30) {
          return [5, 1];
        } else if (
          rowIndex === 31 ||
          rowIndex === 32 ||
          rowIndex === 33 ||
          rowIndex === 34
        ) {
          return [0, 0];
        }
      }
    },
    tableCellStyle({ row, column, rowIndex, columnIndex }) {
      return {
        border: "1px solid black"
      };
    },
    tableHeaderCellStyle({ row, column, rowIndex, columnIndex }) {
      return {
        textAlign: "center",
        border: "1px solid black"
      };
    }
  },
  created() {
    axios
      .get("../../static/data.json")
      .then(response => {
        // var st=JSON.parse(response.data)
        // console.log(response.data.tableData3[0].hotel1)
        // console.log(st);
        this.tableData31 = response.data.tableData3;
        console.log(this.tableData31[0].hotel1);
        this.tableData41 = response.data.tableData4;
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  }
};
</script>
<style scoped>
.cell {
  text-align: center;
}
.container_xieyi {
  margin: 1% 1%;
  overflow: hidden;
}
button {
  margin: 2% !important;
}
</style>
