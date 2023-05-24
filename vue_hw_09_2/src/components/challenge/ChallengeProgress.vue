<template>
  <div class="container">
    참여중인 챌린지 : {{this.challenge_eventList.length}}
    
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row" v-for="(challenge, index) in challenge_eventList" :key="index">
              <div class="card p-2">
              <div class="card-body">
                <h5 class="card-title"> {{challenge.challenge_title}}</h5>
                <p class="card-text">진행기간 : {{ challenge.challenge_startDate }} ~ {{ challenge.challenge_endDate }}</p>
                <a class="btnJoin btn btn-primary" @click="showForm(challenge.challenge_id, challenge.challenge_startDate.substring(5,7))">진행도확인</a>

                <!-- ========================== -->
                <div v-if="showProgressBar">
                    <progress-bar></progress-bar>
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
import ProgressBar from "./ProgressBar.vue";


export default {
name: "ChallengeProgress",
data() {
  return{
    showProgressBar: false,
    id_for_call_Bar : "",
    month_for_SetBar : "",
  };
},
components:{
  ProgressBar,
},
methods:{
  showForm(challenge_id, month) {
    this.showProgressBar= !this.showProgressBar;
    this.id_for_call_Bar = challenge_id;
    this.month_for_SetBar = month;
  },
},

computed: {
  ...mapState(["MyChallenges", "loginToken", "loginUserId"]),
  ...mapGetters(["challenge_eventList"]),
  },
  
created() {
  this.$store.dispatch("setMyChallenge");
  this.$store.dispatch("setMonthRecord");
},
};
</script>

<style scoped>
.btnJoin{
  width : 100px;
  height : 40px;
}
.btnmsg{
  width: 30px;
  height: 30px;
}
</style>