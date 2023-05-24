<template>
  <header>
    <div>
      <b-tabs v-model="activeTab" class="challenge-nav" fill>
        <b-tab @click="navigateTo(1)">
          <template #title>
            <div class="board-header-nav-link">공지사항</div>
          </template>
        </b-tab>
        <b-tab @click="navigateTo(2)">
          <template #title>
            <div class="board-header-nav-link">자유게시판</div>
          </template>
        </b-tab>
        <b-tab @click="navigateTo(3)">
          <template #title>
            <div class="board-header-nav-link">운동정보</div>
          </template>
        </b-tab>
        <b-tab @click="navigateTo(4)">
          <template #title>
            <div class="board-header-nav-link">식단정보</div>
          </template>
        </b-tab>
      </b-tabs>
    </div>
  </header>
</template>

<script>
export default {
  name: "BoardNav",
  data() {
    return {
      activeTab: 0,
    };
  },
  methods: {
    navigateTo(param) {
      this.$router.push({ name: "PostList", params: { board_id: param } });
    },
  },
};
</script>

<style scoped>
.board-header-nav-link {
  height: 50px;
}
</style>
