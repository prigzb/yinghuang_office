<template>
   <div>
       <div class="xieyi">
                    <p style="fontSize:1.3rem;color:tomato;">葛洲坝协议酒店</p>
            <el-table
                    :data="tableData31"
                    style="width: 98%;"
                    row-key="id"
                    border
                    :expand-row-keys="expands"
                    @row-click="rowClick">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="right" inline class="demo-table-expand">
                            <el-form-item label="星级标准风格">
                                <span>{{ props.row.style}}</span>
                            </el-form-item>
                            <el-form-item label="客房价格">
                                <span>{{ props.row.price }}</span>
                            </el-form-item>
                            <el-form-item label="总机">
                                <a :href="'tel:'+props.row.phone"><span>{{ props.row.phone }}</span></a>
                            </el-form-item>
                            <el-form-item label="联系人">
                                <span>{{ props.row.linkman }}</span>
                            </el-form-item>
                            <el-form-item label="联系电话">
                                <a :href="'tel:'+props.row.linkcall"><span>{{ props.row.linkcall }}</span></a>
                            </el-form-item>
                            <el-form-item label="地址">
                                <span>{{ props.row.address }}</span>
                            </el-form-item>
                            <el-form-item label="距英皇中心距离">
                                <span>{{ props.row.distance }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column
                        label="酒店 ID"
                        prop="id"
                        width="80">
                </el-table-column>
                <el-table-column
                        label="酒店名称"
                        prop="name">
                </el-table-column>
                <el-table-column
                        label="客房型"
                        prop="room">
                </el-table-column>
            </el-table>
       </div>
       <div class="unxieyi">
                    <p style="fontSize:1.3rem;color:tomato;">葛洲坝非协议酒店</p>
            <el-table
                    :data="tableData41"
                    style="width: 98%;"
                    row-key="id"
                    border
                    :expand-row-keys="expands"
                    @row-click="rowClick">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="right" inline class="demo-table-expand">
                            <el-form-item label="星级标准风格">
                                <span>{{ props.row.style}}</span>
                            </el-form-item>
                            <el-form-item label="客房价格">
                                <span>{{ props.row.price }}</span>
                            </el-form-item>
                            <el-form-item label="总机">
                                <a :href="'tel:'+props.row.phone"><span>{{ props.row.phone }}</span></a>
                            </el-form-item>
                             <el-form-item label="联系人">
                                <span>{{ props.row.linkman }}</span>
                            </el-form-item>
                            <el-form-item label="联系电话">
                                <a :href="'tel:'+props.row.linkcall"><span>{{ props.row.linkcall }}</span></a>
                            </el-form-item>
                            <el-form-item label="地址">
                                <span>{{ props.row.address }}</span>
                            </el-form-item>
                            <el-form-item label="距英皇中心距离">
                                <span>{{ props.row.distance }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column
                        label="酒店 ID"
                        prop="id"
                        width="80">
                </el-table-column>
                <el-table-column
                        label="酒店名称"
                        prop="name">
                </el-table-column>
                <el-table-column
                        label="客房型"
                        prop="room">
                </el-table-column>
            </el-table>
       </div>
   </div>
</template>
 
<style>
.el-table {
  margin: 0 auto !important;
  border: 1px solid black;
  table-layout: fixed;
}
.el-table th {
  text-align: center;
  /* width:20%!important; */
}
/* .el-table thead tr>th{
    width:25%;
} */
/* .table-fixed {
    /deep/ .el-table th:nth-child(1){
        width:20%! important;
    }
} */
.demo-table-expand {
  font-size: 0;
  padding: 13px 14px !important;
}
.demo-table-expand label {
  width: 36%;
  float: left !important;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
  float: left;
}
/* .el-table_1_column_2 .el-table th {
  text-align: center !important;
  width: 50% !important;
} */
.el-table tr th:second-child {
  width: 20% !important;
}
.el-table__expanded-cell[class*="cell"] {
  padding: 5px 10px !important;
}

table tr td:second-child,
table tr th:second-child {
  width: 50px !important;
}
</style>
 
<script>
import axios from "axios";
XuntongJSBridge.call("setWebViewTitle", { title: "协议酒店" });
export default {
  data() {
    return {
      tableData31: [],
      tableData41: [],
      // 要展开的行，数值的元素是row的key值
      expands: []
    };
  },
  methods: {
    //在<table>里，我们已经设置row的key值设置为每行数据id：row-key="id"
    rowClick(row, event, column) {
      Array.prototype.remove = function(val) {
        let index = this.indexOf(val);
        if (index > -1) {
          this.splice(index, 1);
        }
      };
      if (this.expands.indexOf(row.id) < 0) {
        this.expands = [];
        this.expands.push(row.id);
      } else {
        this.expands.remove(row.id);
      }
      // if (this.expands.indexOf(row.id) < 0) {
      //     this.expands.push(row.id);
      // } else {
      //     this.expands.remove(row.id);
      // }
    }
  },
  created() {
    axios
      .get("../../static/data.json")
      .then(response => {
        console.log(response.data);
        this.tableData31 = response.data.tableData3;
        this.tableData41 = response.data.tableData4;
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  }
};
</script>