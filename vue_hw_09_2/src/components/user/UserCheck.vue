<template>  <!--사용자가 맞는지 비밀번호를 통해 확인한 후 맞으면 보내는 칸  -->
  <div class="container text-center">
    <h2 class="text-light m-5">비밀번호 확인</h2>
    <div class="col-11 card regist-card p-5 mx-auto mt-5">

      <div class="row m-3">
        <label class="col-3 form-label" for="user_pw">비밀번호</label>
        <input type="password" id="user_pw" v-model="password" class="col-8 form-control"/>
      </div>

      <div class="d-flex justify-content-center">
        <button class="btn btn-custom-regist text-light" @click="checkPassword">확인</button>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
    };
  },
  methods: {
    checkPassword() {
      
      this.$store.dispatch("checkUserReal",this.password)
      this.password = ""
    },
  },
};
</script>

