<template>
  <header>
      <div>
        <b-nav class="board-na'v" tabs fill>
          <b-nav-item active>
            <router-link :to="{name: 'PostList', params: {board_id: 1}}" ><div class="board-header-nav-link">공지사항</div></router-link>
            </b-nav-item>
          <b-nav-item>        
            <router-link :to="{name: 'PostList', params: {board_id: 2}}" ><div class="board-header-nav-link">자유게시판</div></router-link>
          </b-nav-item>
          <b-nav-item>        
            <router-link :to="{name: 'PostList', params: {board_id: 3}}" ><div class="board-header-nav-link">운동정보</div></router-link>
          </b-nav-item>
          <b-nav-item>        
            <router-link :to="{name: 'PostList', params: {board_id: 4}}" ><div class="board-header-nav-link">식단정보</div></router-link>
          </b-nav-item>
        </b-nav>
      </div>
  </header>
</template>

<script>
export default {
  name: "BoardNav",
};
</script>

<style scoped>
.board-header-nav-link{
  height: 50px;
}
</style>