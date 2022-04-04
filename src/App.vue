<template>
  <TheHeader />
  <SideNav />
  <router-view />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import SideNav from "@/components/SideNav.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    SideNav
  }
};
</script>
