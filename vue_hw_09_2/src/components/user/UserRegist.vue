<template>
  <div class="container text-center">
    <h2 class="text-light m-5">회원 가입</h2>
    <div class="col-11 card regist-card p-5 mx-auto mt-5">
      
      <div class="row m-3">
        <label class="col-2 form-label" for="user_id">아이디</label>
        <input type="text" id="user_id" v-model="user_id" class="col-6 mr-4 form-control" />
        <button @click="idCheck" class="btn btn-custom-check m-1 text-light">중복확인</button><br />
      </div>

      <div class="row m-3">
        <label class="col-2 form-label" for="user_pw">비밀번호</label>
        <input type="password" id="user_pw" v-model="user_pw" class="col-8 form-control"/>
      </div>

      <div class="row m-3">
        <label class="col-2 form-label" for="user_pw_chk">비밀번호 확인</label>
        <input type="password" id="user_pw_chk" v-model="user_pw_chk" class="col-8 form-control"/>
      </div>

      <span v-if="chk">일치</span>
      <span v-else>비밀번호를 다시 확인해주세요</span>
      
      
      <div class="row m-3">
        <label class="col-2 form-label" for="user_name">이름</label>
        <input type="text" id="user_name" v-model="user_name" class="col-8 form-control" /><br />
      </div>

      <div class="row m-3">
        <label class="col-2 form-label" for="user_email">이메일</label>
        <input type="email" id="user_email" v-model="user_email" class="col-8 form-control" /><br />
      </div>

      <div class="row m-3">
        <label class="col-2 form-label" for="user_nickname">닉네임</label>
        <input type="text" id="user_nickname" v-model="user_nickname" class="col-8 form-control" /><br />
      </div>

      <div class="d-flex justify-content-center">
        <button class="btn btn-custom-regist text-light" @click="regist">등록</button>
      </div>
    
    </div>

    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "UserList",
  data() {
    return {
      user_id: "",
      user_pw: "",
      user_name: "",
      user_email: "",
      user_img: {},
      user_nickname: "",
      user_pw_chk : "",
      //img: "",
      chk : false,
    
    };
  },
  methods: {
    idCheck(){
      this.$store.dispatch("idDuplicateChk", this.user_id);
      
    },

    // setFile : function(e) {
    //   // console.log(e.target.files)//files는 배열로 들어온다.
    //   // console.log(e.target.files[0])//files는 배열로 들어온다.

    //   // const user_img_file = new FormData();
    //   // user_img_file.append("file", e.target.files[0]);
    //   // this.user_img = user_img_file;
    // const user_img_file = new FormData();
    // user_img_file.append("file", e.target.files[0]);

    // const file = e.target.files;
    // let validation = true;
    // let message = '';

    // if (file[0].size > 1024 * 1024 * 2) {
    //     message = `${message}, 파일은 용량은 2MB 이하만 가능합니다.`;
    //     validation = false;
    // }

    // if (file[0].type.indexOf('image') < 0) {
    //     message = `${message}, 이미지 파일만 업로드 가능합니다.`;
    //     validation = false;
    // }

    // if (validation) {
    //     this.user_img = user_img_file;
    // }else {
    //     this.user_img = '';
    //     alert(message);
    // }

    // },

    regist() {
      console.log(123213213)
      if(!this.idChk){//중복확인 하지 않았을 시
        alert("중복확인 해주세요")
        return
      }
      if ( // 하나라도 공백이 있다면
        this.user_id === "" ||
        this.user_pw === "" ||
        this.user_name === "" ||
        this.user_email === ""
      ) {
        alert("모든 내용을 입력해주세요");
        return;
      }
      if(!this.chk){ // 비밀번호 확인의 값이 틀리다면
        alert("비밀번호를 정확히 입력해주세요")
        return
      }
      


      let user = {
        user_id: this.user_id,
        user_pw: this.user_pw,
        user_name: this.user_name,
        user_email: this.user_email,
        user_phone: this.user_phone,
        user_nickname: this.user_nickname,
        //age: this.age,
        //img: "#",
      };


      this.$store.dispatch("createUser",user);
      
    },
  },
  computed: {
    ...mapState(["randomUser"]),
    ...mapState(["idChk"]),

  },
  watch : {
    user_pw_chk(){
      if(this.user_pw_chk===this.user_pw){
        this.chk = true;
      }
      else{
        this.chk = false;
      }
    },
  },
};
</script>

<style scoped>
.btn-custom-check {
  width: 100px;
  height: 35px;
  background-color: rgb(87, 144, 218);
}

.regist-card {
  background-color: rgba(255, 255, 255, 0);
}
</style>