<template>
  <main class="content">
    <AppMenu />
    <router-view > </router-view>
    <AppFooter />
  </main>
  
</template>

<script>
import AppMenu from "./components/AppMenu.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: {
    AppMenu,
    AppFooter
  }
};
</script>

<style lang="scss">
  @import "./assets/main.scss";
</style>