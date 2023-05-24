<template>
  <header>

      <div>
        <b-nav class="challenge-nav" tabs fill>
          <b-nav-item active>
            <router-link class="link-dark" :to="{name: 'ChallengeList', params: {challenge_sort: 1}}" ><div class="board-header-nav-link">모임</div></router-link>
            </b-nav-item>
          <b-nav-item>    
            <router-link class="link-dark" :to="{name: 'EventList'}" ><div class="board-header-nav-link">이벤트</div></router-link>
          </b-nav-item>
          <b-nav-item>    
            <router-link class="link-dark" :to="{name: 'MyChallenge'}" ><div class="board-header-nav-link">참여중인 모임</div></router-link>
          </b-nav-item>
          <b-nav-item>  
            <router-link class="link-dark" :to="{name: 'ChallengeProgress'}" ><div class="board-header-nav-link">진행도 확인 탭</div></router-link>
        </b-nav-item>
        </b-nav>
      </div>
  </header>
</template>

<script>
export default {
  name: "ChallengeNav",
};
</script>

<style scoped>
.board-header-nav-link{
  height: 50px;
}
</style>