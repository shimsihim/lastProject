<template>
      <div class="container">
        <h2>챌린지 목록</h2>
        <h4>등록된 챌린지의 수 : {{ challengeCnt }}</h4>
        <div v-if="challengeCnt">
          <select name="selectBy" v-model="selectBy">
            <option>전국</option>
            <option>서울</option>
            <option>경기</option>
            <option>강원</option>
          </select><br />
          
          <challenge-create-form></challenge-create-form>

              <div class="row">
                <div class="col-sm-6 p-2" v-for="(challenge, index) in challenges" :key="index">
                  <div class="card p-2">
                    <div class="card-body" >
                      <h5 class="card-title"> {{challenge.challenge_title}}</h5>
                      <span class="card-text">모임장 : {{ challenge.challenge_makeUser_nickname }}</span> | 
                      <span class="card-text">지역 : {{ challenge.challenge_location }}</span> | 
                      <span class="card-text">참여인원 : {{ challenge.challenge_participants.length }} / {{ challenge.challenge_cnt }}</span>
                      <p class="card-text">진행기간 : {{ challenge.challenge_startDate }} ~ {{ challenge.challenge_endDate }}</p>
                          <div v-if="checkMember(challenge.challenge_id)">
                          <a class="btnJoin btn btn-primary disabled" @click="addParticipant(challenge)">참여중</a>
                          <a class="btnJoin btn btn-primary" @click="deleteParticipant(challenge)">참여취소</a>
                          </div>
                          <a v-else class="btnJoin btn btn-primary" @click="addParticipant(challenge)">참여하기</a>
                          <button v-if="loginUserId === challenge.challenge_makeUser" class="btnJoin btn btn-primary" @click="deleteChallenge(challenge)">삭제</button>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        <div v-else>등록된 챌린지가 없습니다.</div>
        
    
      </div>
</template>
    
<script>
  import { mapState, mapGetters } from "vuex";
  import ChallengeCreateForm from "./ChallengeCreateForm.vue";
    
  export default {
    name: "ChallengeList",
    data() {
      return{
        selectBy: "전국",
      };
    },
    components:{
      ChallengeCreateForm,
    },
    methods:{
      change(challenge_sort){
      this.$store.dispatch("setChallenges",{
        challenge_sort: challenge_sort,
        location: this.selectBy,
      });
    },
      deleteChallenge(challenge){
        this.$store.dispatch("deleteChallenge",challenge);
      },
      deleteParticipant(challenge){
        this.$store.dispatch("deleteParticipant",challenge);
      },
      addParticipant(challenge){
        this.$store.dispatch("addParticipant",challenge);
      },
      checkMember(challenge_id){
        for(let i=0; i<this.MyChallenges.length; i++) {
          if(this.MyChallenges[i].challenge_id == challenge_id) {
            return true;
          }
        }
        return false;
      },
    },
    watch: {
      selectBy: function(location) {
      const pathName = new URL(document.location).pathname.split("/");
      const challenge_sort = pathName[pathName.length - 1];
      this.$store.dispatch("setChallenges",{
        challenge_sort: challenge_sort,
        location: location,
      })
      },

      $route(to, form) {
      if (to.path !== form.path) 
      this.change(this.$route.params.challenge_sort);// 게시판 이동 시 마다 주소값을 확인하여 게시판 종류에 맞는 게시글 나타냄
      },
    },

  //     watch: {
  //     $route(to, form) {
  //     if (to.path !== form.path) 
  //     this.change(this.$route.params.challenge_sort);// 게시판 이동 시 마다 주소값을 확인하여 게시판 종류에 맞는 게시글 나타냄
  //   },
  // },

    
    computed: {
      ...mapState(["challenges", "loginToken", "loginUserId", "MyChallenges"]),
      ...mapGetters(["challengeCnt"]),
      },
    created() {
      const pathName = new URL(document.location).pathname.split("/");
      const challenge_sort = pathName[pathName.length - 1];
      this.$store.dispatch("setChallenges",{
        challenge_sort: challenge_sort,
        location: this.selectBy,
      });
    },
  };
</script>
    
<style scoped>
    .btnJoin{
      width: 100px;
      height: 30px;
    }
</style>