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
            <Form class='form-input' ref="formInline" :model="formInline" :rules="ruleInline" inline>
              <FormItem class='form-item' prop="username">
                <Input v-model="formInline.username" autoFocus placeholder="Username"/>
              </FormItem>
              <FormItem class='form-item' prop="password">
                <Input v-model="formInline.password" type="password" placeholder="Password"/>
              </FormItem>
              <Button type="primary" class='form-btn' @click="handleSubmit('formInline')">
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
