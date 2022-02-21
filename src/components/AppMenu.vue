<template>
  <nav>
    <ul>
      <li>
        <router-link to="/"><AppLogo /></router-link>
      </li>
      <li>
        <router-link to="/restaurants">Restaurants</router-link>
      </li>
    </ul>
    <div class="cart-container">
    <router-link to="/cart">Cart</router-link>
    <div class="smallnum" v-if="doneCartCount > 0">{{ doneCartCount }}</div>
    </div>
  </nav>
</template>

<script>
import AppLogo from "./AppLogo.vue";

export default {
  components: {
    AppLogo,
  },
  computed: {
    doneCartCount() {
      return this.$store.getters.cartCount;
    },
  },
};
</script>

<style lang="scss" scoped></style>
