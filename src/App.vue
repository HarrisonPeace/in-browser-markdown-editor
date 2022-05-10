<template>
  <SideNav :nav-open="showNav" />
  <div :class="['main-body', showNav && 'main-body--nav-open']">
    <TheHeader @menu-click="toggleNav" :nav-open="showNav" />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import SideNav from "@/components/SideNav.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    SideNav
  },
  data() {
    return {
      showNav: false
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    }
  }
};
</script>

<style lang="scss" scoped>
.main-body {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transition: left 900ms cubic-bezier(0.215, 0.61, 0.355, 1);
  height: 100%;
  &--nav-open {
    left: 250px;
  }
}
</style>
