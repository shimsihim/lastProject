<template>
  <header>
        <div>
      <b-tabs v-model="activeTab" class="challenge-nav" fill>
        <b-tab @click="navigateTo('ChallengeList', 1)">
          <template #title>
            <div class="board-header-nav-link">모임</div>
          </template>
        </b-tab>
        <b-tab @click="navigateTo('EventList')">
          <template #title>
            <div class="board-header-nav-link">이벤트</div>
          </template>
        </b-tab>
        <b-tab @click="navigateTo('MyChallenge')">
          <template #title>
            <div class="board-header-nav-link">참여중인 모임</div>
          </template>
        </b-tab>
        <b-tab @click="navigateTo('ChallengeProgress')">
          <template #title>
            <div class="board-header-nav-link">진행도 확인 탭</div>
          </template>
        </b-tab>
      </b-tabs>
    </div>
  </header>
</template>

<script>
export default {
  name: "ChallengeNav",
  data() {
    return {
      activeTab: 0
    }
  },
  methods: {
    navigateTo(routeName, param) {
      this.$router.push({ name: routeName, params: { challenge_sort: param } });
    }
  },
};
</script>

<style scoped>
.board-header-nav-link{
  height: 50px;
}
</style>