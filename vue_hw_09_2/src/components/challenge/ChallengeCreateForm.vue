<template>
      <div v-if="loginToken">
        <div class="d-flex justify-content-end">
          <button class="btn btn-custom-regist text-dark" data-bs-toggle="collapse" data-bs-target="#showRegistForm" aria-expanded="false" aria-controls="showRegistForm">등록하기</button>
        </div>
        
        <div class="collapse mb-5" id="showRegistForm">
          <div class="d-flex justify-content-center">
          <div class="col-8">
            <div class="row">
                <label class="form-label col-2" for="challenge_location">지역</label>
              <div class="col-10">
                <select class="form-select col-3" id="challenge_location" name="challenge_location" v-model="challenge_location">
                    <option>서울</option>
                    <option>경기</option>
                    <option>강원</option>
                    <option selected>전국</option>
                </select><br />
              </div>
            </div>

            <div class="row">
              <label for="challenge_title" class="col-sm-2 col-form-label">제목</label>
              <input type="text" id="challenge_title" v-model="challenge_title" class="view col-10 form-control" /><br />
            </div>

            <div class="row">
              <label for="challenge_content" class="col-sm-2 col-form-label">내용</label>
              <textarea id="challenge_content" v-model="challenge_content" class="view col-10 form-control" >내용</textarea><br />
            </div>

            <div class="row">
              <label for="challenge_cnt" class="col-sm-2 col-form-label">모집인원</label>
              <input type="number" id="challenge_cnt" v-model="challenge_cnt" class="view col-10 form-control" /><br />
            </div>

            <div class="row">
              <label for="challenge_startDate" class="col-sm-2 col-form-label">시작일</label>
              <input type="date" id="challenge_startDate" v-model="challenge_startDate" class="view col-10 form-control" /><br />
            </div>

            <div class="row">
              <label for="challenge_endDate" class="col-sm-2 col-form-label">마감일</label>
              <input type="date" id="challenge_endDate" v-model="challenge_endDate" class="view col-10 form-control" /><br />
            </div>

            <div class="d-flex justify-content-center">
              <button class="btn btn-custom-regist text-dark" @click="registChallenge">등록</button>
              <button class="btn btn-custom text-dark"   @click="cancelModal">초기화</button>
            </div>
          </div>
          </div>
        </div>

      </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ChallengeCreateForm",
  data() {
    return{
      showRegistForm:false,
      challenge_sort : "",
      challenge_location : "",
      challenge_title : "",
      challenge_content : "",
      challenge_cnt : "",
      challenge_startDate : "",
      challenge_endDate : "",
    };
  },
  methods: {
    showForm(){
          this.showRegistForm = !this.showRegistForm;
        },
    
    registChallenge() {
      const pathName = new URL(document.location).pathname.split("/");
      const challenge_sort = pathName[pathName.length - 1];
        const new_challenge ={
          challenge_sort : challenge_sort,
          challenge_location : this.challenge_location,
          challenge_title : this.challenge_title,
          challenge_content : this.challenge_content,
          challenge_cnt : this.challenge_cnt,
          challenge_startDate : this.challenge_startDate,
          challenge_endDate : this.challenge_endDate,
          loginToken: this.loginToken,
      };
      this.showRegistForm = !this.showRegistForm;
      this.$store.dispatch("registChallenge",new_challenge);
    },
    cancelModal() {
      this.challenge_sort = "";
      this.challenge_location = "";
      this.challenge_title = "";
      this.challenge_content = "";
      this.challenge_cnt = "";
      this.challenge_startDate = "";
      this.challenge_endDate = "";
      this.showRegistForm = !this.showRegistForm;
    },
  },
  computed: {
      ...mapState(["loginToken"]),

  },  
  created() {

  },
};
</script>
<style scoped>
.btn-custom{
  width : 100px;
    height : 40px;
    background-color:#c3c8cde9;
}
.btn.btn-custom-delete:hover {
  background-color:rgba(84, 161, 224, 0.606);
}
</style>