<template>
  <div class="container">
    참여중인 챌린지 : {{this.challenge_eventList_all.length}}
    
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row" v-for="(challenge, index) in challenge_eventList_all" :key="index">
              <div class="card m-2 p-2 wow fadeInUp" data-wow-delay="0.1s">
              <div class="card-body rounded py-4 px-4">
                <h5 class="card-title"> {{challenge.challenge_title}}</h5>
                <p class="card-text">참여인원 : {{ challenge.challenge_participants.length }} / {{ challenge.challenge_cnt }}</p>
                <p class="card-text">진행기간 : {{ challenge.challenge_startDate }} ~ {{ challenge.challenge_endDate }}</p>
                <a class="btnJoin btn btn-primary" @click="showForm(index)">상세보기</a>
                <span v-if="checkMember(challenge.challenge_id)">
                          <a class="btnJoin btn btn-primary disabled" @click="addParticipant(challenge)">참여중</a>
                          <a class="btnJoin btn btn-primary" @click="deleteParticipant(challenge)">참여취소</a>
                          </span>
                          <a v-else class="btnJoin btn btn-primary" @click="addParticipant(challenge)">참여하기</a>
                          <button v-if="loginUserId === challenge.challenge_makeUser" class="btnJoin btn btn-primary" @click="deleteChallenge(challenge)">삭제</button>

                  <!-- ========================== -->
                  <div class="d-flex" v-if="showPoster && index+1==posterIdx">
                    <b-img :src="`/img/challenge-${posterIdx}.png`" fluid alt="Responsive image"></b-img>
                      <!-- <img src="../../../public/img/challenge-1.png"> -->
                    </div>
                  <!-- ========================== -->

              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";


export default {
name: "EventList",
data() {
  return{
    showPoster: false,
    posterIdx:"",
  };
},
methods:{
  showForm(index) {
    this.showPoster= !this.showPoster;
    this.posterIdx = index+1;
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

computed: {
  ...mapState(["MyChallenges", "loginToken", "loginUserId"]),
  ...mapGetters(["challenge_eventList_all"]),
  },
  
created() {
  this.$store.dispatch("setChallenges",{
        challenge_sort: 2,
        location: "전국",
      });
},
};
</script>

<style scoped>
.btnJoin{
  width : 100px;
  height : 40px;
}

/* img {
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(0, 0);
} */
</style>