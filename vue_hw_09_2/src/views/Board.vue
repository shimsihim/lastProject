
<template>
    <div class="bg-light">
    <div class="container-xxl bg-primary position-relative p-0" id="home">
            <div class="container-xxl hero-header">
                <div class="container">

                <!-- ================원본 데이터==================== -->  
                  <div>
                    <page-title :title="`게시판`" :msg="`관심사별 게시판을 활용해 소통하실 수 있습니다.`"></page-title>
                    <!-- <board-nav></board-nav> -->
                    <!-- <router-view></router-view> -->
                  </div>
                  <!-- ===============원본 데이터===================== -->
                  </div>
              </div>
            </div>
            <board-nav></board-nav>
          <router-view></router-view>
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



