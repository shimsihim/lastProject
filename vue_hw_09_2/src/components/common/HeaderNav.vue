<template>
  <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
    <a href="" class="navbar-brand p-0">
      <h1 class="mt-0"><router-link to="/" class="logo">FIT FRIENDS</router-link></h1>
      <!-- <img src="img/logo.png" alt="Logo"> -->
    </a>
    <button class="navbar-toggler rounded-pill" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
      aria-expanded="false">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav mx-auto py-0">
        <a class="nav-item nav-link"><router-link to="/">홈</router-link></a>
        <a class="nav-item nav-link"><router-link to="/video/main">운동영상</router-link></a>
        <a class="nav-item nav-link"><router-link to="/board/list/1">게시판</router-link></a>
        <a class="nav-item nav-link"><router-link to="/challenge/main/1">모임</router-link></a>
        <a class="nav-item nav-link"><router-link to="/record">이력관리</router-link></a>
      </div>

      <b-dropdown v-if="getUser" no-caret > <!--NO CARET은 드롭다운 사용 시 +모양 표시를 제거  -->
        <template #button-content>
          <b-icon-person-circle scale="1.4" class="m-0 p-0"> </b-icon-person-circle>
        </template>
        <b-dropdown-item>
          <router-link to="/user/usercheck">마이페이지</router-link>
        </b-dropdown-item>
      </b-dropdown>

      <a v-else class="nav-item nav-link">
        <router-link :to="{ name: 'Regist' }" >회원가입</router-link>
      </a>

      <a v-if="getUser" class="btn btn-light rounded-pill py-2 px-2 ms-3 d-none d-lg-block text-nowrap" @click="logout">
        <router-link to="/">로그아웃</router-link>
      </a>
      <a v-else class="btn btn-light rounded-pill py-2 px-2 ms-3 d-none d-lg-block text-nowrap">
        <router-link class="btn-login text-light" style="text-decoration-line=none;" to="/login">로그인</router-link>
      </a>
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

.btn.dropdown-toggle.btn-secondary {
  /* 드롭다운 css설정 */
  background-color: #ffffff;
  color: #77CEEE;
  border-color: #ffffff;
}

.custom-dropdown{
  width:100px;
  height:50px;
}

.row.g-5 {
  margin-top: 0;
}</style>
