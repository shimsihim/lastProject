<template>
  <div class="container text-center">
    <h2 class="text-light m-5">마이페이지</h2>
    <div class="col-11 card regist-card p-5 mx-auto mt-5">

      <div class="container my-page">
        <b-form-group label="아이디">
          <b-form-input v-model="myInformation.user_id" disabled></b-form-input>
        </b-form-group>
        <b-form-group label="비밀번호">
          <b-form-input v-model="myInformation.user_pw" type="password" ></b-form-input>
        </b-form-group>
        <b-form-group label="이메일">
          <b-form-input v-model="myInformation.user_email" ></b-form-input>
        </b-form-group>
        <b-row>
          <b-col cols="6">
            <b-form-group label="키">
              <b-form-input v-model="myInformation.user_height" ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group label="몸무게">
              <b-form-input v-model="myInformation.user_weight" ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
    
        <div class="mt-4 text-center">
          <b-button-group>
            <b-button variant="primary" @click="updateUser" class="mr-2">수정</b-button>
            <b-button variant="danger" @click="deleteUser">탈퇴</b-button>
          </b-button-group>
        </div>
      </div>
      
    </div>
  </div>
  </template>
  
  <script>
  import { mapState } from "vuex";
  
  export default {
    data() {
      return {};
    },
    methods: {
      updateUser() {
        this.$store.dispatch("updateUser", this.myInformation);
      },
      deleteUser() {
        this.$store.dispatch("deleteUser", this.myInformation.user_id);
        this.$store.commit("LOGOUT")
      },
    },
    computed: {
      ...mapState(["myInformation"]),
    },
    created() {
      this.$store.dispatch("getMyInformation");
    },
  };
  </script>
  
  <style scoped>
  .my-page {
    max-width: 600px;
    margin: 0 auto;
  }
  </style>