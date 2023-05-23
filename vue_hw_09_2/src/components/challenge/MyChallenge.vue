<template>
  <div class="container">
    모임 모아서 보는 창
    내가 참여중인 것 띄우고
    누르면 이동하도록
    {{this.MyChallenges.length}}

    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="row" v-for="(challenge, index) in MyChallenges" :key="index">
            <div class="col-12 p-2">
              <div class="card p-2">
                <div class="card-body" >
                  <h5 class="card-title"> {{challenge.challenge_title}}</h5>
                  <span class="card-text">모임장 : {{ challenge.challenge_makeUser_nickname }}</span> | 
                  <span class="card-text">지역 : {{ challenge.challenge_location }}</span> | 
                  <p class="card-text">진행기간 : {{ challenge.challenge_startDate }} ~ {{ challenge.challenge_endDate }}</p>
                  <a class="btnJoin btn btn-primary" @click="showForm(challenge.challenge_id)">메신저</a>
                  <!--               
                      <div v-if="checkMember(challenge.challenge_id)">
                      <a class="btnJoin btn btn-primary disabled" @click="addParticipant(challenge)">참여중</a>
                      <a class="btnJoin btn btn-primary" @click="deleteParticipant(challenge)">참여취소</a>
                      </div>
                      <a v-else class="btnJoin btn btn-primary" @click="addParticipant(challenge)">참여하기</a>
                      <button v-if="loginUserId === challenge.challenge_makeUser" class="btnJoin btn btn-primary" @click="deleteChallenge(challenge)">삭제</button> -->
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div class="col">
          <div v-if="showMessenger" class="col-12 p-2">
            메신띄울카드폼
            <div class="card p-2">
              <h5 class="card-title">일단 띄워봐</h5>
              <div class="row">
                <div class="col-9">
                  <input class="form-control border-0 rounded-pill w-60 ps-4 pe-5" type="text" v-model="message_content" placeholder="내용을 입력하세요" style="height: 58px;">
                </div>
                <div class="col-3">
                  <a class="btnJoin btn btn-primary" @click="registMsg">보내기</a>
                </div>
              </div>
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
name: "MyChallenge",
data() {
  return{
    showMessenger: false,
    id_for_callMsg : "",
    message_content:"",
  };
},
// components:{
//   ChallengeCreateForm,
// },
methods:{
  showForm(challenge_id) {
    this.showMessenger = !this.showMessenger;
    this.id_for_callMsg = challenge_id;
  },
  registMsg() {
    const message = {
      challenge_id : this.id_for_callMsg,
      message_content : this.message_content,
      message_writer_id : this.loginToken,
    }
      this.$store.dispatch("registMessage",message);
  },
//   change(challenge_sort){
//   this.$store.dispatch("setChallenges",{
//     challenge_sort: challenge_sort,
//     location: this.selectBy,
//   });
// },
//   deleteChallenge(challenge){
//     this.$store.dispatch("deleteChallenge",challenge);
//   },
//   deleteParticipant(challenge){
//     this.$store.dispatch("deleteParticipant",challenge);
//   },
//   addParticipant(challenge){
//     this.$store.dispatch("addParticipant",challenge);
//   },
//   checkMember(challenge_id){
//     for(let i=0; i<this.MyChallenges.length; i++) {
//       if(this.MyChallenges[i].challenge_id == challenge_id) {
//         return true;
//       }
//     }
//     return false;
//   },
},


 watch: {
  id_for_callMsg:function(val){
    this.$store.dispatch("setMessages", val)
  }
},
//   selectBy: function(location) {
//   const pathName = new URL(document.location).pathname.split("/");
//   const challenge_sort = pathName[pathName.length - 1];
//   this.$store.dispatch("setChallenges",{
//     challenge_sort: challenge_sort,
//     location: location,
//   })
//   },

//   $route(to, form) {
//   if (to.path !== form.path) 
//   this.change(this.$route.params.challenge_sort);// 게시판 이동 시 마다 주소값을 확인하여 게시판 종류에 맞는 게시글 나타냄
//   },
// },

// //     watch: {
// //     $route(to, form) {
// //     if (to.path !== form.path) 
// //     this.change(this.$route.params.challenge_sort);// 게시판 이동 시 마다 주소값을 확인하여 게시판 종류에 맞는 게시글 나타냄
// //   },
// // },


computed: {
  ...mapState(["MyChallenges", "loginToken"]),
  },
  
// created() {
//   this.$store.dispatch("setMyChallenge");
// },
};
</script>

<style scoped>
.btnJoin{
  width : 100px;
  height : 40px;
}
</style>