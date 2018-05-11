<template>
    <el-table
            :data="tableData31"
            style="width: 100%"
            row-key="id"
            :expand-row-keys="expands"
            @row-click="rowClick">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="星级标准风格">
                        <span>{{ props.row.style}}</span>
                    </el-form-item>
                    <el-form-item label="客房价格">
                        <span>{{ props.row.price }}</span>
                    </el-form-item>
                    <el-form-item label="总机">
                        <span>{{ props.row.phone }}</span>
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
                prop="id">
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
</template>
 
<style>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>
 
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                 tableData31: [],
                 tableData41: [], 
                // 要展开的行，数值的元素是row的key值
                expands: []
            }
        },
        methods:{
         //在<table>里，我们已经设置row的key值设置为每行数据id：row-key="id"
            rowClick(row, event, column) {
                Array.prototype.remove = function (val) {
                    let index = this.indexOf(val);
                    if (index > -1) {
                        this.splice(index, 1);
                    }
                };
                if (this.expands.indexOf(row.id) < 0) {
                    this.expands = []
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
    }
</script>