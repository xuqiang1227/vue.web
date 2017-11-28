<template>
  <div>
    <p>{{$t('example_test', i18n.locale)}}</p>
    <p v-t="{path: 'example_test', locale: i18n.locale}"></p>
  </div>
</template>
<script>
  export default {
    name: 'Example',
    data() {
      return {
        i18n: this.$store.state.i18n
      }
    }
  }
</script>
