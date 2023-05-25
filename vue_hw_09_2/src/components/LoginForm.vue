<template>
  <div>
        <div class="container-xxl bg-primary position-relative p-0" id="home">
            <div class="container-xxl hero-header">
                <div class="container">
                  <div class="col-lg-8 mx-auto wow fadeInUp" data-wow-delay="0.1s">
                    <h2 class="text-center m-5 text-light">로그인</h2>
                          <div class="container p-4 card regist-card">
                            <div class="row m-3">
                              <label class="col-2 form-label" for="user_id">아이디</label>
                              <input type="text" id="user_id" v-model="user_id" class="col-9 form-control" /><br />
                            </div>

                            <div class="row m-3">
                              <label class="col-2 form-label" for="user_pw">비밀번호</label>
                              <input type="password" id="user_pw" v-model="user_pw" class="col-9 form-control"
                              />
                            </div>

                            <div class="d-flex justify-content-center">
                              <button class="btn btn-custom-regist" @click="login">로그인</button>
                            </div>

                          </div>
                  </div>
                </div>

                </div>
            </div>
          </div>

</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LoginForm",
  data() {
    return {
      user_id: "",
      user_pw: "",
    };
  },
  methods: {
    login() {
      let user = {
        user_id: this.user_id,
        user_pw: this.user_pw,
      };

      this.$store.dispatch("setLoginUser", user);
    },
  },
  computed : {
    ...mapState(["loginToken"]),
  }
};
</script>
<style scoped>
.regist-card {
  background-color: rgba(255, 255, 255, 0);
}

</style>
