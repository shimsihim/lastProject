

<template>
  <div class="bg-light">
    <div class="container-xxl bg-primary position-relative p-0" id="home">
      <div class="container-xxl hero-header">
        <div class="container">
          <page-title :title="`운동 모임`" :msg="`모임을 만들어 함께 운동하세요.`"></page-title>
        </div>
      </div>
    </div>
    <challenge-nav></challenge-nav>
    <router-view></router-view>
    </div>        
</template>


<script>
import ChallengeNav from "@/components/challenge/ChallengeNav.vue";
import PageTitle from "@/components/common/PageTitle.vue";

export default {
  name: "Challenge",
  components : {
    PageTitle,
    ChallengeNav,
  }
};
</script>



