<template>
  <div>
    <!-- Contact Start -->
    <!-- <div class="container-xxl bg-primary position-relative p-0" id="home">
            <div class="container-xxl hero-header">
                <div class="container">
        <div v-if="!loginToken" class="container-xxl py-6" id="contact">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 class="mb-3">로그인</h1>
                        <form>
                            <div class="row g-3">
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="text" v-model="user_id"  class="form-control" id="user_id" placeholder="Your Name">
                                        <label for="user_id">아이디</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="password" v-model="user_pw" class="form-control" id="user_pw" placeholder="Your Email">
                                        <label for="user_pw">비밀번호</label>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <button class="btn btn-primary rounded-pill py-3 px-5" @click="login">로그인</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
      </div> -->
        <!-- Contact End -->


        <div class="container-xxl bg-primary position-relative p-0" id="home">
            <div class="container-xxl hero-header">
                <div class="container">
                  <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                          <div class="container">
                            <h2>로그인</h2>
                            <fieldset class="text-center">
                              <label for="user_id">아이디</label>
                              <input type="text" id="user_id" v-model="user_id" class="view" /><br />
                              <label for="user_pw">비밀번호</label>
                              <input
                                type="password"
                                id="user_pw"
                                v-model="user_pw"
                                class="view"
                              /><br />
                      
                              <button class="btn" @click="login">로그인</button>
                            </fieldset>
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
<style></style>
