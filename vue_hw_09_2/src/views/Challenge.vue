

<template>
  <div>
    <page-title :title="`운동 모임`" :msg="`모임을 만들어 함께 운동하세요.`"></page-title>
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



