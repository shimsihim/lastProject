<template>
      <!-- <b-form>
        <b-form-group label="지역" label-for="name-input">
          <b-form-input id="name-input" v-model="name"></b-form-input>
        </b-form-group>
        <b-form-group label="제목" label-for="challenge_title-input">
          <b-form-input id="email-challenge_title" v-model="challenge_title"></b-form-input>
        </b-form-group>
        <b-form-group label="내용" label-for="challenge_content">
          <b-form-input id="challenge_content" v-model="challenge_content"></b-form-input>
        </b-form-group>
        <b-form-group label="모집인원" label-for="challenge_cnt">
          <b-form-input type="number" id="challenge_cnt" v-model="challenge_cnt"></b-form-input>
        </b-form-group>
        <b-form-group label="시작일" label-for="echallenge_startDate">
          <b-form-input type="date" id="challenge_startDate" v-model="challenge_startDate"></b-form-input>
        </b-form-group>
        <b-form-group label="마감일" label-for="challenge_endDate">
          <b-form-input type="date" id="challenge_endDate" v-model="challenge_endDate"></b-form-input>
        </b-form-group>

        <template #modal-footer>
          <div class="d-flex justify-content-end">
              <b-button variant="primary" @click="registChallenge">등록</b-button>
              <b-button variant="secondary" @click="cancelModal">취소</b-button>
            </div>
          </template>

      </b-form> -->


      <div v-if="loginToken">
        <button @click="showForm">등록하기</button>
        <div v-if="showRegistForm">
          <div>

            <label for="challenge_location">지역</label>
            <select id="challenge_location" name="challenge_location" v-model="challenge_location">
                <option>서울</option>
                <option>경기</option>
                <option>강원</option>
                <option selected>전국</option>
            </select><br />

            <label for="challenge_title">제목</label>
            <input type="text" id="challenge_title" v-model="challenge_title" class="view" /><br />

            <label for="challenge_content">내용</label>
            <textarea id="challenge_content" v-model="challenge_content" class="view" >내용</textarea><br />

            <label for="challenge_cnt">모집인원</label>
            <input type="number" id="challenge_cnt" v-model="challenge_cnt" class="view" /><br />

            <label for="challenge_startDate">시작일</label>
            <input type="date" id="challenge_startDate" v-model="challenge_startDate" class="view" /><br />

            <label for="challenge_endDate">마감일</label>
            <input type="date" id="challenge_endDate" v-model="challenge_endDate" class="view" /><br />

            <button variant="primary" @click="registChallenge">등록</button>
            <button variant="secondary"  @click="cancelModal">초기화</button>

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
      this.$store.dispatch("registChallenge",new_challenge);
      this.showRegistForm = false;
    },
    cancelModal() {
      this.challenge_sort = "";
      this.challenge_location = "";
      this.challenge_title = "";
      this.challenge_content = "";
      this.challenge_cnt = "";
      this.challenge_startDate = "";
      this.challenge_endDate = "";
      this.showRegistForm = false;
    },
  },
  computed: {
      ...mapState(["loginToken"]),

  },  
  created() {

  },
};
</script>