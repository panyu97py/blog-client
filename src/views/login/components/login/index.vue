<template>
  <div id="login">
    <el-form :model="form" ref="loginForm" :rules="rules">
      <el-form-item prop="username">
        <el-input
          v-model="form.username"
          placeholder="请输入用户名"
          class="login_input"
          @keyup.enter.native="submit"
        >
          <svg-icon slot="prefix" icon-class="username" class="login_username_icon"/>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
          class="login_input"
          @keyup.enter.native="submit"
        >
          <svg-icon slot="prefix" icon-class="password" class="login_password_icon"/>
        </el-input>
      </el-form-item>
    </el-form>
    <el-button @click="submit" class="login_button">登录</el-button>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, message: '长度大于三个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, message: '长度大于三个字符', trigger: 'blur' }
        ]
      }
    }
  },
  props: {
    from: {
      type: String
    }
  },
  computed: {
    to () {
      return this.$route.query.to
    }
    // token () {
    //   return localStorage.getItem('token') || null
    // }
  },
  methods: {
    ...mapActions(['login', 'gerUserInfo']),
    ...mapMutations(['SET_TOKEN']),
    /**
     * 提交表单中的账户密码登陆
     */
    submit () {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          let { username, password } = this.form
          await this.login({ username, password })
          // 若不存在 from 则跳转至博客前台页面
          this.loginSuccess()
        } else {
          return false
        }
      })
    },
    /**
     * 校验localStorage中的token若有效则免密登陆
     */
    // async loginByToken () {
    //   if (this.token) {
    //     this.SET_TOKEN(this.token)
    //     await this.gerUserInfo()
    //     this.loginSuccess()
    //   }
    // },
    /**
     * 登陆成功后的提示与跳转
     */
    loginSuccess () {
      this.$notify({
        title: '成功',
        message: '登录成功',
        type: 'success'
      })
      this.$router.push({
        name:
              this.to && this.to !== 'login'
                ? this.to
                : this.from
                  ? this.from
                  : 'app'
      })
    }
  }
  // mounted () {
  //   this.loginByToken()
  // }
}
</script>
