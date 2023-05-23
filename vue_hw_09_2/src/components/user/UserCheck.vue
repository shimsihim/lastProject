<template>  <!--사용자가 맞는지 비밀번호를 통해 확인한 후 맞으면 보내는 칸  -->
  <div>
    <h2>비밀번호 확인</h2>
    <b-form>
      <b-form-group label="비밀번호">
        <b-form-input v-model="password" type="password"></b-form-input>
      </b-form-group>
      <b-button variant="primary" @click="checkPassword">확인</b-button>
    </b-form>
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

<style scoped>
h2 {
  margin-top: 40px;
}
</style>