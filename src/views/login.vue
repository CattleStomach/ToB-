<template>
  <div style="height: 100%">
    <!-- 顶部logo -->
    <div class="el-login-head">
      <img class="logo-head" src="../assets/logo/logo_head.png" alt="" />
    </div>
    <div class="login">
      <div class="login-container">
        <el-form
          class="login-form"
          ref="loginForm"
          :rules="loginRules"
          :model="loginForm"
          label-width="80px"
        >
          <span class="title">账户密码登录</span>
          <el-form-item prop="userName" label="用户名">
            <el-input
              type="text"
              auto-complete="off"
              placeholder="请输入手机号"
              v-model="loginForm.userName"
            ></el-input>
          </el-form-item>
          <el-form-item prop="passWord" label="密码">
            <el-input
              auto-complete="off"
              placeholder="请输入密码"
              type="password"
              v-model="loginForm.passWord"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%" @click="login"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        userName: '',
        passWord: ''
      },
      accessToken: 'asdfghjkl',
      loginRules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (this.loginForm.userName === 'admin' && this.loginForm.passWord === '123456') {
            // 往localStorage存储数据(token写死)
            localStorage.setItem('accessToken', this.accessToken)
            this.$message.success('登录成功')
            this.$router.push({ name: 'home' })
          } else {
            this.$message.error('用户名或密码错误')
          }
        }

      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-login-head {
  height: 9vh;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
  .logo-head {
    width: 16vw;
  }
}
.login {
  display: flex;
  //justify-content: center;
  align-items: center;
  height: calc(91vh - 40px);
  background-image: url("../assets/logo/login_background.png");
  background-size: 100% 100%;
  position: relative;
}
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(25vw + 16px);
  height: calc(50vh + 16px);
  background-color: rgba(255, 255, 255, 0.24);
  border-radius: 4px;
  position: absolute;
  right: 10vw;
}
.login-form {
  z-index: 9;
  border-radius: 6px;
  background-color: #fff;
  background-image: url("../assets/logo/login_bg.png");
  // 背景图缩小
  background-size: 100% 100%;
  // 背景图重复
  background-repeat: no-repeat;
  width: 25vw;
  height: 50vh;
  padding: 25px 30px 5px 30px;
  position: relative;
  & ::v-deep .el-input {
    height: 5.5vh;
    margin-top: 12px;
    .el-input__inner {
      height: 5.5vh;
    }
  }
}
.title {
  margin: 15px auto 25px auto;
  display: inline-block;
  text-align: left;
  font-size: 22px;
  font-weight: 500;
  color: rgb(223, 62, 148);
  line-height: 25px;
}
& ::v-deep .el-form-item__label {
  color: rgb(223, 62, 148);
  font-size: 18px;
  line-height: 70px;
  font-weight: 900;
}
</style>