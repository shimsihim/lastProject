<template>
  <div id="app">
    <header-nav />
    <router-view />
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
.text-center {
  text-align: center;
}
.container {
  margin: 0px 30px;
}
body {
  background-image : url('../public/img/templatemo-wave-banner.jpg'), linear-gradient(#348CD2, #FFFFFF);
  background-repeat : no-repeat;
  background-size: 108% 76%;
  background-position: top;
  padding-top: 40px;
}
</style>
