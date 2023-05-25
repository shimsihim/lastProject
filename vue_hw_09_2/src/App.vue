<template>
  <!-- style="margin-bottom: 100px;margin-top : 95px" -->
  <div id="app">
    <div class="container-xxl bg-white p-0" style="margin-bottom: 100px;">
    <header-nav />
   <!-- <div class="container-xxl bg-primary position-relative p-0" id="home">
            <div class="container-xxl hero-header">
                <div class="container"> -->
                  <router-view />
                <!-- </div>
            </div>
          </div> -->
  </div>
  </div>
</template>
<script>
import HeaderNav from "@/components/common/HeaderNav.vue";
export default {
  name: "App",
  components: {
    HeaderNav,
  },
};
</script>
<style>


</style>
