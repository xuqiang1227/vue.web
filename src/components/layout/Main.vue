<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
      <Col class="layout-menu-left" :span="spanLeft">
       <my-menu :spanLeft="spanLeft"></my-menu>
      </Col>
      <Col :span="spanRight">
      <div class="layout-header">
        <Button type="text" @click="toggleClick">
          <Icon type="navicon" size="32"></Icon>
        </Button>
        <div><a @click="setLocale('zh_CN')">中文</a> | <a @click="setLocale('en_US')">英文</a> | <a href="/">退出</a></div>
      </div>
      <div class="layout-breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem href="#">Index</BreadcrumbItem>
          <BreadcrumbItem href="#">Apps</BreadcrumbItem>
          <BreadcrumbItem>App</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div class="layout-content">
        <router-view></router-view>
      </div>
      <div class="layout-copy">
        2011-2017 &copy; wafersystems
      </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  import Menu from './Menu.vue'

  export default {
    name: 'Main',
    data () {
      return {
        spanLeft: 5,
        spanRight: 19
      }
    },
    components: {
      'my-menu': Menu
    },
    computed: {},
    methods: {
      toggleClick () {
        if (this.spanLeft === 5) {
          this.spanLeft = 2
          this.spanRight = 22
        } else {
          this.spanLeft = 5
          this.spanRight = 19
        }
      },
      setLocale(locale) {
        this.$store.commit('setLocale', locale);
      }
    }
  }
</script>

<style scoped lang="less">
  @import "./Layout.less";
</style>
