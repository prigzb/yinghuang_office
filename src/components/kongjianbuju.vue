<template>
    <div class="container">
        <p style="text-align:left;fontSize:20px;fontFamily:Helvetica Neue;textIndent:30px;">根据各部门提出的新办公楼功能需求，重新对办公区进行了安排和设计:</p>
        <el-table
            :data="tableData2"
            style="width:100%;text-align:center;"
            fit
            :row-style="rowStyle"
            :cell-style="tableCellStyle"
            :header-cell-style="tableHeaderCellStyle"
            :row-class-name="tableRowClassName">
            <el-table-column
            prop="floor"
            label="楼层"
            width="40%">
            </el-table-column>
            <el-table-column
            prop="cont"
            label="办公区"
            width="60%">
            </el-table-column>
        </el-table>
        <p style="text-align:left;fontSize:20px;fontFamily:Helvetica Neue;textIndent:30px;">根据人力提供的未来三年的人力规划，本次一共设置了290工位数，满足了各部门人员工位需求,
另为节能环保、降低成本，所有的办公家具采用利旧原则，原家具能使用的全部利旧再用。</p>
    </div>
</template>

<style>
.container {
  margin: 2% 3%;
}
.el-table {
  border: 1px solid black;
}
.el-table th {
  text-align: center;
}
.el-table .warning-row {
  background: rgba(166, 167, 231, 0.849);
}

.el-table .success-row {
  background: #e7a9bb;
}
.el-table__body,
.el-table__footer,
.el-table__header {
  width: 100% !important;
}
</style>

<script>
XuntongJSBridge.call("setWebViewTitle", { title: "空间布局" });
export default {
  name: "kongjianbuju",
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 0) {
        return "warning-row";
      } else if (rowIndex === 1) {
        return "success-row";
      }
      return "";
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
    },
    rowStyle({ row, column, rowIndex, columnIndex }) {
      return {
        width: "100%"
      };
    }
  },
  data() {
    return {
      tableData2: [
        {
          floor: "21层",
          cont:
            "董事长办公室、总经理办公室、常务副总办公室、VIP接待室、VIP会议室、前台、评审会议室、运营部、营销部、财务产权部、投资发展中心、国际业务中心、办公室"
        },
        {
          floor: "20层",
          cont:
            "副董事长办公室及各模块分管领导、党群部、集中采购中心、安全质量中心、人力资源部、审计部、纪检监察部、风险控制部、科技信息部、酒管中心、设计、精装、景观中心、审图室、材料室、司机班室等"
        },
        {
          floor: "19层",
          cont: "5G科技展示区、多功能会议厅、公司接待区"
        }
      ]
    };
  }
};
</script>