<template>
  <div class="app">
    <SideBar />
    <AppHeader />
    <!-- Content -->
    <router-view />
  </div>
</template>
<script setup>
import SideBar from "./components/SideBar.vue";
import AppHeader from "./components/AppHeader.vue";
</script>

<style lang="scss">

</style>
