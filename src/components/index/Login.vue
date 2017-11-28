<template>
  <div class='normal'>
    <div class='login'>
      <div class='title'>Vue Initial</div>
      <div class='login-form'>
        <div class='form'>
          <div class='form-title'>
            用户登录
          </div>
          <div class='form-login'>
            <Form class='form-input' ref="userForm" :model="user" :rules="ruleUser" inline>
              <FormItem class='form-item' prop="username">
                <Input v-model="user.username" autoFocus placeholder="Username" @on-change="setUsername"/>
              </FormItem>
              <FormItem class='form-item' prop="password">
                <Input v-model="user.password" :value="user.password" type="password" placeholder="Password" @on-change="setPassword"/>
              </FormItem>
              <Button type="primary" class='form-btn' @click="handleSubmit('userForm')">
                Log in
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Login.js"></script>
<style scoped lang="less">
  @import "./Login.less";
</style>
