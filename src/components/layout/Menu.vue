<template>
  <Menu active-name="1" theme="dark" width="auto" @on-select="menuClick">
    <div class="layout-logo-left"></div>
    <MenuItem name="1">
      <Icon type="ios-navigate" :size="iconSize"></Icon>
      <span class="layout-text">Option 1</span>
    </MenuItem>
    <MenuItem name="2">
      <Icon type="ios-keypad" :size="iconSize"></Icon>
      <span class="layout-text">Test</span>
    </MenuItem>
    <MenuItem name="3">
      <Icon type="ios-analytics" :size="iconSize"></Icon>
      <span class="layout-text">Option 3</span>
    </MenuItem>
  </Menu>
</template>
<style lang="less">
  @import "./Layout.less";
</style>
<script>
  export default {
    data () {
      return {}
    },
    props: ['spanLeft'],
    computed: {
      iconSize () {
        return this.spanLeft === 5 ? 14 : 24
      }
    },
    methods: {
      menuClick(name) {
        switch (name) {
          case '2':
            this.$router.push('/main/test');
            break;
        }
      }
    }
  }
</script>
