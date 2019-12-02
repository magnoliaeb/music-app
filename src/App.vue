<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appFooter from '@/components/layouts/Footer'
import appHeader from '@/components/layouts/Header'
export default {
  components: {
    appFooter,
    appHeader
  }
}
</script>

<style lang="scss">
@import "./assets/scss/main";
</style>
