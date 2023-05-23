<template>
  <div class="container">
    참여중인 챌린지 : {{this.challenge_eventList_all.length}}
    
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="row" v-for="(challenge, index) in challenge_eventList_all" :key="index">
              <div class="card p-2">
              <div class="card-body">
                <h5 class="card-title"> {{challenge.challenge_title}}</h5>
                <p class="card-text">참여인원 : {{ challenge.challenge_participants.length }} / {{ challenge.challenge_cnt }}</p>
                <p class="card-text">진행기간 : {{ challenge.challenge_startDate }} ~ {{ challenge.challenge_endDate }}</p>
                <a class="btnJoin btn btn-primary" @click="showForm">상세보기</a>

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


export default {
name: "EventList",
data() {
  return{
    showPoster: false,
  };
},
methods:{
  showForm() {
    this.showPoster= !this.showPoster;
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
.btnmsg{
  width: 30px;
  height: 30px;
}
</style>