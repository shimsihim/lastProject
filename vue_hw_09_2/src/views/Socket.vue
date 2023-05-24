<template>   <!--  this.id  가 들어있는 공간에 현재 선택된 챌린지가 들어가야 함  -->
    <div id="app">
      
      내용: <input
        v-model="message"
        type="text"
        @keyup="sendMessage"
      >
      <div
        v-for="(pastChat, idx) in pastChat"
        :key="idx"
      ><h3>유저이름: {{ pastChat.userName }}</h3>
        <h3>내용: {{ pastChat.content }}</h3>
      </div>
      <div
        v-for="(item, idx) in recvList"
        :key="idx"
      >
        <h3>유저이름: {{ item.userName }}</h3>
        <h3>내용: {{ item.content }}</h3>
      </div>
    </div>
  </template>
  
  <script>
  import Stomp from 'webstomp-client'
  import SockJS from 'sockjs-client'
  import { mapState } from "vuex";
  export default {
    name: 'App',
    data() {
      return {
        id : 4,
        message: "",
        recvList: []
      }
    },
    created() {
        this.$store.dispatch("getChat",this.id)
        console.log(21312312312312)
        console.log(21312312312312)
        console.log(21312312312312)
        console.log(21312312312312)
      // App.vue가 생성되면 소켓 연결을 시도합니다.
      this.connect()
    },
    computed: {
        ...mapState(["loginUserId","pastChat"])
    },
    methods: {
      sendMessage (e) {
        console.log("sendMessage")
        console.log("sendMessage")
        console.log("sendMessage")
        if(e.keyCode === 13 && this.loginUser !== '' && this.message !== ''){
          this.send()
          this.message = ''
        }
      },    
      send() {
        console.log("send")
        console.log("send")
        console.log("send")
        console.log("send")

        console.log("Send message:" + this.message + "loginUser : "+  this.loginUserId);
        if (this.stompClient && this.stompClient.connected) {
          const msg = { 
            userName: this.loginUserId,
            content: this.message ,
            challenge_id : this.id
          };
          this.stompClient.send(`/receive/${this.id}`, JSON.stringify(msg), {});
        }
      },    
      connect() {
        const serverURL = "http://localhost:9999"
        let socket = new SockJS(serverURL);
        this.stompClient = Stomp.over(socket);
        console.log(`소켓 연결을 시도합니다. 서버 주소: ${serverURL}`)
        this.stompClient.connect(
          {},
          frame => {
            // 소켓 연결 성공
            this.connected = true;
            console.log('소켓 연결 성공', frame);
            // 서버의 메시지 전송 endpoint를 구독합니다.
            // 이런형태를 pub sub 구조라고 합니다.
            this.stompClient.subscribe(`/send/${this.id}`, res => {
              console.log('구독으로 받은 메시지 입니다.', res.body);
  
              // 받은 데이터를 json으로 파싱하고 리스트에 넣어줍니다.
              this.recvList.push(JSON.parse(res.body))
            });
          },
          error => {
            // 소켓 연결 실패
            console.log('소켓 연결 실패', error);
            this.connected = false;
          }
        );        
      },
     
    }
  }
  </script>