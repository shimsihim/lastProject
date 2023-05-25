<template>
  <div id="app">
    <div class="card p-2" style="min-height:745px; max-height: 745px;">
      <div class="card-body" style="overflow-y: auto" ref="chatBody">
        <div class="d-flex justify-content-flex-end align-items-center"></div>
        <b-container>
          <div v-for="(pastChat, idx) in pastChat" :key="idx">
            <b-row>

              <div v-if="pastChat.userName === `${loginUserId}`" class="message-left align">
                <b-col md="6">
                  <b-card class="myCard card" style="background-color: #fafa5ab3; padding : 0px"> <!-- 내가 쓴 글은 노란색 -->
                    <div class="message-content myContent">{{ pastChat.content }}</div>
                  </b-card>
                  <div class="message-username myName">{{ pastChat.userName }}</div>
                </b-col>
              </div>

              <div v-else class="message-right align">
                <b-col md="6" offset-md="6">
                  <b-card class="yourCard card">
                    <div class="message-content yourContent">{{ pastChat.content }}</div>
                  </b-card>
                  <div class="message-username yourName">{{ pastChat.userName }}</div>

                </b-col>
              </div>
            </b-row>
          </div>
          <!-- 기존 작성된 문자들은 이 위에 -->
          <!--  -->
          <!--  -->
          <!--  -->
          <div v-for="(item, idx) in recvList" :key="idx">
            <b-row>

              <div v-if="item.userName === `${loginUserId}`" class="message-left align">
                <b-col md="6">
                  <b-card class="myCard card" style="background-color: #fafa5ab3;">
                    <div class="myContent message-content">{{ item.content }}</div>
                  </b-card>
                  <div class="message-username myName">{{ item.userName }}</div>
                </b-col>
              </div>
              <div v-else class="message-right align">
                <b-col md="6" offset-md="6">
                  <b-card class="yourCard card">
                    <div class="message-content yourContent">{{ item.content }}</div>
                  </b-card>
                  <div class="message-username yourName">{{ item.userName }}</div>
                </b-col>
              </div>
            </b-row>
          </div>
        </b-container>
      </div>
      <b-container>
        <b-row>
          <b-col md="7">
            <div style="margin-top: 9px;">
            <b-form-input v-model="message" placeholder="채팅을 입력하세요" @keyup.enter="send"></b-form-input>
          </div>
            
          </b-col>
          <b-col md="3" offset-md="1">
            <a class="btnJoin btn btn-primary text-nowrap btn-block" @click="send">보내기</a>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Stomp from "webstomp-client";
import SockJS from "sockjs-client";
import { mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      message: "",
      recvList: [],
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  watch: {
    id: function (val) {
      this.$store.dispatch("getChat", val);
      this.connect();
    },
    recvList() {
      this.scrollToBottom();
    },
  },
  computed: {
    ...mapState(["loginUserId", "pastChat"]),
  },
  created() {
    this.$store.dispatch("getChat", this.id);
    this.connect();
  },
  methods: {
    scrollToBottom() {
      this.$nextTick(() => {
        const chatBody = this.$refs.chatBody;
        chatBody.scrollTop = chatBody.scrollHeight;
      });
    },
    send() {
      if (this.loginUserId !== "" && this.message !== "") {
        console.log("챌린지 아이디는" + this.id);
        console.log(
          "Send message:" + this.message + "loginUser : " + this.loginUserId
        );
        if (this.stompClient && this.stompClient.connected) {
          const msg = {
            userName: this.loginUserId,
            content: this.message,
            challenge_id: this.id,
          };
          this.stompClient.send(`/receive/${this.id}`, JSON.stringify(msg), {});
          this.message = "";
        }
      } else alert("내용을 입력해주세요");
    },
    connect() {
      const serverURL = "http://localhost:9999";
      let socket = new SockJS(serverURL);
      this.stompClient = Stomp.over(socket);
      console.log(`소켓 연결을 시도합니다. 서버 주소: ${serverURL}`);
      this.stompClient.connect(
        {},
        (frame) => {
          // 소켓 연결 성공
          this.connected = true;
          console.log("소켓 연결 성공", frame);
          // 서버의 메시지 전송 endpoint를 구독합니다.
          // 이런형태를 pub sub 구조라고 합니다.
          this.stompClient.subscribe(`/send/${this.id}`, (res) => {
            console.log("받은 메시지 입니다.", res.body);

            // 받은 데이터를 json으로 파싱하고 리스트에 넣어줍니다.
            this.recvList.push(JSON.parse(res.body));
          });
        },
        (error) => {
          // 소켓 연결 실패
          console.log("소켓 연결 실패", error);
          this.connected = false;
        }
      );
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@300;400;700&display=swap');

.message-left {
  text-align: left;
  margin-bottom: 10px;
}

.message-right {
  text-align: right;
  margin-bottom: 10px;
}

.message-content {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  border-radius: 5px;
  font-size: 25px;
  font-family: 'Gaegu', cursive;
}

.message-username {
  font-size: 16px;
  color: #888;
  margin-top: 4px;
  margin-bottom: 7px;
}

.align {
  display: flex;
  flex-direction: column
}

.myName {
  margin-left: 7px;
}

.yourName {
  margin-right: 7px;
}

.card {
  padding: 0.1rem;
}

.card-body {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 11px;
  padding-right: 11px;
}
</style>