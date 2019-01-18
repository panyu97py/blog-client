<template>
  <div id="login">
    <el-form :model="form" ref="loginForm" :rules="rules">
      <el-form-item prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名" class="login_input">
          <svg-icon slot="prefix" icon-class="username" class="login_username_icon"/>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码" class="login_input">
          <svg-icon slot="prefix" icon-class="password" class="login_password_icon"/>
        </el-input>
      </el-form-item>
    </el-form>
    <el-button @click="submit" class="login_button">登录</el-button>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
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
          { required: true, message: '请输入密码', trigger: 'change' },
          { min: 3, message: '长度大于三个字符', trigger: 'blur' }
        ]
      }
    }
  },
  props: {
    from: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions(['login']),
    submit () {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          let {username, password} = this.form
          await this.login(username, password)
          this.$router.push({name: this.from})
        } else {
          return false
        }
      })
    }
  },
  mounted () {
    console.log(this.$router)
  }
}
</script>
