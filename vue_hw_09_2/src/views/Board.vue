
<template>
  <div>
    <page-title :title="`게시판`" :msg="`관심사별 게시판을 활용해 소통하실 수 있습니다.`"></page-title>
    <board-nav></board-nav>
    <router-view></router-view>
    <hr />
  </div>
</template>

<script>
import BoardNav from "@/components/board/BoardNav.vue";
import PageTitle from "@/components/common/PageTitle.vue";

export default {
  name: "Board",
  components : {
    BoardNav,
    PageTitle,
  }
};
</script>



