<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>用户管理</span>
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
              @click="addUser"
              >添加用户</el-button
            >
          </div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column
              prop="name"
              label="姓名"
              width="180"
            ></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column label="操作" width="180">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="text"
                  @click="handleEdit(scope.row)"
                  >编辑</el-button
                >
                <el-button
                  size="mini"
                  type="text"
                  @click="handleDelete(scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAdd">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        address: ''
      },
      dialogVisible: false,
      edit: false,
      tableData: [
        {
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  created () { },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    },
    // 添加用户/编辑用户确定按钮
    handleAdd () {
      console.log(this.tableData, '查询')
      if (this.edit) {
        // 编辑
        this.tableData.forEach((item, index) => {
          if (item.name === this.form.name) {
            this.tableData[index] = this.form
          }
        })
      } else {
        // 添加
        this.tableData.push(this.form)
      }
      this.dialogVisible = false
      this.edit = false
    },
    // 添加用户打开弹窗
    addUser () {
      this.dialogVisible = true
      this.form = {
        name: '',
        address: ''
      }
    },
    // 编辑按钮
    handleEdit (row) {
      this.edit = true
      this.dialogVisible = true
      this.form = row
    },
    // 删除按钮
    handleDelete (e) {
      console.log(e, '查询e')
      this.$confirm('此操作将永久删除此条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 删除
        this.tableData.forEach((item, index) => {
          if (item.name === e.name && item.address === e.address) {
            this.tableData.splice(index, 1)
          }
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
};
</script>
<style lang="less" scoped>
</style>