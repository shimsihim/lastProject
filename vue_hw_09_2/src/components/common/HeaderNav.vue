<template>


            <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" class="navbar-brand p-0">
                    <h1 class="mt-0"><router-link to="/" class="logo">FIT FRIENDS</router-link></h1>

                    <!-- <img src="img/logo.png" alt="Logo"> -->
                </a>
                <button class="navbar-toggler rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav mx-auto py-0">
                        <a class="nav-item nav-link"><router-link to="/">홈</router-link></a>
                        <a class="nav-item nav-link"><router-link to="/video/main">운동영상</router-link></a>
                        <a class="nav-item nav-link"><router-link to="/board/list/1">게시판</router-link></a>
                        <a class="nav-item nav-link"><router-link to="/challenge/main/1">챌린지</router-link></a>
                    </div>

                    <a v-if="getUser" class="nav-item nav-link"><router-link to="/mypage">마이페이지</router-link></a>
                    <a v-else class="nav-item nav-link"><router-link :to="{ name: 'Regist' }">회원가입</router-link></a>
                    
                    <a v-if="getUser" class="btn btn-light rounded-pill py-2 px-2 ms-3 d-none d-lg-block" @click="logout"><router-link to="/">로그아웃</router-link></a>
                    <a v-else class="btn btn-light rounded-pill py-2 px-2 ms-3 d-none d-lg-block"><router-link to="/login">로그인</router-link></a>

                </div>
            </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "HeaderNav",
  methods: {
    logout() {
      this.$store.commit("LOGOUT");
      alert("로그아웃 되었습니다.");
    },
  },
  computed: {
    ...mapState(["loginToken"]),
    getUser() {
      if (this.loginToken) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style>
a:hover {
  text-decoration-line: none; 
}

header {
  line-height: 70px;
}
.no-style-link:hover {
  text-decoration-line: none; 
  color: inherit; 
}

</style>
