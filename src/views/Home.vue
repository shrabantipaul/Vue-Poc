<template>
  <div class="home">
    <!-- <AppMenu /> -->
    <AppHeader />
    <AppRestaurantInfo :datasource="fooddata" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
// import AppMenu from "../components/AppMenu.vue";
import AppRestaurantInfo from "../components/AppRestaurantInfo.vue";

export default {
  components: {
    AppHeader,
    AppRestaurantInfo,
    // AppMenu
  },
  created() {
     this.$store.dispatch('getFoodData')
  },
  computed: {
    fooddata() {
      return this.$store.state.fooddata;
    },
  },
};
</script>
