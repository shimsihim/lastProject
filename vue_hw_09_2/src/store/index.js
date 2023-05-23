import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    searchUsers: [],
    user: {},
    loginUserId: "ssafy",
    loginToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJzc2FmeSJ9.yNR-utf7kXExltWHQOq7lKsLRKroezlb2AdP9iAY1mk",
    posts: [],
    post: {},
    postComments: [],
    video: {},
    videoComments: [],
    search_videos: [],
    idChk: false, // 아이디 중복검사 결과
    likeChk: false, // 게시물 좋아요 체크
    challenges: [],
    MyChallenges: [],
    Records: [], // 1일치 기록, 달력 클릭 시 리로드 됨
    MonthRecords: [], // 1달치 기록으로 달력페이지 들어올 시 로딩 됨
    messages:[],
    MyEvents : [], // 달력에 띄우기 위한 용도로, 내가 참여한 이벤트(챌린지 중 이벤트)

  },
  getters: {
    userCnt: function (state) {
      return state.users.length;
    },
    postCnt: function (state) {
      return state.posts.length;
    },
    searchUserCnt: function (state) {
      return state.searchUsers.length > 0 ? state.searchUsers.length : null;
    },
    get_month_record: function (state) {
      return state.MonthRecords;
    },
    get_my_events: function (state) {
      return state.MyEvents;
    },
    challengeCnt: function (state) {
      return state.challenges.length;
    },
  },
  mutations: {
    CREATE_USER: function (state, user) {
      state.users.push(user);
      state.idChk = false // 회원가입 했으므로 기본 값으로
    },
    SET_USERS: function (state, users) {
      state.users = users;
    },
    SET_USER: function (state, user) {
      state.user = user;
    },
    SEARCH_NAME: function (state, users) {
      state.searchUsers = users;
    },
    SET_LOGIN_USER_ID: function (state, loginUserId) {
      state.loginUserId = loginUserId;
    },
    SET_LOGIN_TOKEN: function (state, token) {
      state.loginToken = token;
    },
    LOGOUT: function (state) {
      state.loginToken = null;
      state.loginUserId = null;
    },
    ID_DUPLICATE_CHK: function (state, checkRes) {
      state.idChk = checkRes;
    },
    SET_RANDOM_USER: function (state, user) {
      state.randomUser = user;
    },
    SET_POSTS: function (state, posts) {
      state.posts = posts;
    },
    SET_POST: function (state, post) {
      state.post = post;
    },
    SET_POST_COMMENTS: function (state, postComments) {
      state.postComments = postComments;
    },
    ADD_POST: function (state, post) {
      state.posts.push(post);
    },
    SET_POST_Like: function (state, dat) {
      state.likeChk = dat;
    },
    LIKE_CHK_REVERSE: function (state) {
      state.likeChk = !state.likeChk;
    },

    SET_VIDEOS: function (state, videos) {
      state.videos = videos;
    },
    SET_VIDEO: function (state, video) {
      state.video = video;
    },
    SET_SEARCH_VIDEOS: function (state, search_videos) {
      state.search_videos = search_videos;
    },
    SET_VIDEO_COMMENTS: function (state, videoComments) {
      state.videoComments = videoComments;
    },
    ADD_VIDEO_COMMENT: function (state, videoComment) {
      state.videoComments.push(videoComment);
    },
    GET_RECORD: function (state, records) {
      state.Records = records;
    },
    SET_MONTH_RECORD: function (state, myallrecords) {
      state.MonthRecords = myallrecords;
    },
    SET_MY_EVENTS: function (state, myEvents) {
      state.MyEvents = myEvents;
    },
    SET_CHALLENGES: function (state, challenges) {
      state.challenges = challenges;
    },
    SET_MY_CHALLENGES: function (state, MyChallenges) {
      state.MyChallenges = MyChallenges;
    },
    SET_MESSAGES: function (state, messages) {
      state.messages = messages;
    },

  },
  actions: {

    // ==================================
    // --USER--
    // ==================================

    createUser: function ({ commit }, user) {
      //중복확인 후 추가하기 
      //빈칸있을 때 입력하라고 하기
      const API_URL = `http://localhost:9999/ssafit/user/signUp`;

      axios({
        url: API_URL,
        method: "POST",
        data: user,
      })
        .then(() => {
          commit("CREATE_USER", user);
          alert("등록되었습니다.");
          router.push("/user");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //전체 유저를 불러오는 기능
    setUsers: function ({ commit }) {
      const API_URL = `http://localhost:9999/ssafit/user/selectAll`;
      return axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {


          commit("SET_USERS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    updateUser: function ({ commit }, loginUser) {

      const API_URL = `http://localhost:9999/ssafit/user/updateUserInfo`;
      axios({
        url: API_URL,
        method: "POST",
        data: loginUser,
      })
        .then(() => {
          alert("수정 완료!");
          router.push("/user");
          commit
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deleteUser: function ({ state }, user_id) {
      const API_URL = `http://localhost:9999/ssafit/user/withdraw/${user_id}`;
      axios({
        method: 'DELETE',
        url: API_URL,

      })
        .then(() => {
          alert("삭제 완료!");
          let index;
          for (let i = 0; i < state.users.length; i++) {
            if (state.users[i].user_id === user_id) {
              index = i;
            }
          }
          state.users.splice(index, 1);
          router.push("/user");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //필요없는 액션으로 판단되므로 이후 사용 없을 시 지우기 5/20
    // setUser: function ({ commit }, id) {
    //   const API_URL = `http://localhost:9999/userapi/user/${id}`;
    //   axios({
    //     url: API_URL,
    //     method: "GET",
    //   })
    //   .then((res) => {
    //       commit("SET_USER", res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   },
    searchName: function ({ commit }, name) {
      const API_URL = `http://localhost:9999/userapi/user/search`;
      axios({
        url: API_URL,
        method: "GET",
        params: {
          key: "name",
          word: name,
        },
      })
        .then((res) => {
          commit("SEARCH_NAME", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    //로그인 기능으로 토큰와 LOGINID를 넣어줌
    setLoginUser: function ({ commit }, user) {
      const API_URL = `http://localhost:9999/ssafit/user/login`;

      axios({
        url: API_URL,
        method: "POST",
        params: {
          user_id: user.user_id,
          user_pw: user.user_pw,
        },
      })
        .then((res) => {
          // let resUser = res.data;
          // if (resUser.id === user.id && resUser.password === user.password) {
          //   alert("로그인 성공!");
          //   commit("SET_LOGIN_USER", res.data);
          //   router.push("/");
          // } else {
          //   alert("로그인 실패");
          // }
          if (res.status === 202) {
            alert("로그인 성공!");
            commit("SET_LOGIN_TOKEN", res.data["access-token"]);
            commit("SET_LOGIN_USER_ID", user.user_id);
            router.push("/");
          }
          else {
            alert("로그인 실패!");
          }
        })
        .catch(() => {
          console.log("실패!")
          alert("로그인 실패");
        });
    },

    //ID중복 검사
    idDuplicateChk: async function ({ commit }, user_id) {
      const API_URL = `http://localhost:9999/ssafit/user/idCheck/${user_id}`;

      await axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          if (res.data) {
            alert("확인 완료")
          }
          else {
            alert("중복된 아이디 입니다.")
          }
          commit("ID_DUPLICATE_CHK", res.data)
          // }
        })
        .catch((err) => {
          console.log(err)
          alert("중복검사 오류")
        });
    },


    // ==================================
    // --POST--
    // ==================================
    //게시판에 맞는 게시물 불러오기
    setPosts: function ({ commit }, board_id) {
      const API_URL = `http://localhost:9999/ssafit/post/board/${board_id}`;
      return axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {

          commit("SET_POSTS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },


    //게시글 등록 및 업데이트
    createPost: function ({ commit, state }, post) {
      let API_URL = `http://localhost:9999/ssafit/post/regist`;

      if (post.post_num) API_URL = `http://localhost:9999/ssafit/post/update`;
      return axios({
        url: API_URL,
        method: "POST",
        data: {
          post_board_id: post.post_board_id,
          post_title: post.post_title,
          post_content: post.post_content,
          post_num: post.post_num,
          token: state.loginToken
        }
      })
        .then(() => {
          alert("등록되었습니다.");
          commit("ADD_POST", post);
          router.push(`/board/list/${post.post_board_id}`)
        })
        .catch((err) => {
          console.log(err);
        });
    },

    //게시물 디테일
    setPost: function ({ commit }, post_num) {
      const API_URL = `http://localhost:9999/ssafit/post/read/${post_num}`;
      axios({
        method: 'GET',
        url: API_URL,

      })
        .then((res) => {
          commit("SET_POST", res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    },


    //게시물 삭제
    deletePost: function ({ state }) {
      const post_num = state.post.post_num;
      const token = state.loginToken;
      const API_URL = `http://localhost:9999/ssafit/post/delete/${post_num}/${token}`;
      const board_id = state.post.post_board_id;

      axios({
        method: 'DELETE',
        url: API_URL,

      })
        .then(() => {
          alert("삭제 완료!");
          // let index;
          // for (let i = 0; i < state.posts.length; i++) {
          //   if (state.posts[i].post_num == post_num) {
          //     index = i;
          //   }
          // }
          // state.users.splice(index, 1);
          router.push(`/board/list/${board_id}`);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    //게시물 좋아요 여부 불러오기(postLikeChk 정하기)
    setPostLike: function ({ commit, state }, post_num) {
      const token = state.loginToken
      const API_URL = `http://localhost:9999/ssafit/postLike/check/${post_num}/${token}`;
      axios({
        method: 'GET',
        url: API_URL,
      })
        .then((res) => {

          commit("SET_POST_Like", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    likeChkReverse: function ({ commit, state }, post_num) {

      const token = state.loginToken
      let vari = "insert"
      if (state.likeChk)
        vari = "delete"

      let API_URL = `http://localhost:9999/ssafit/postLike/${vari}/${post_num}/${token}`;

      axios({
        method: 'GET',
        url: API_URL,
      })
        .then(() => {

          commit("LIKE_CHK_REVERSE");
        })
        .catch((err) => {
          console.log(err);
        });
    },


    // 게시물의 댓글 불러오기
    setPostComments: function ({ commit }, post_num) {
      const API_URL = `http://localhost:9999/ssafit/postComment/read/${post_num}`;
      axios({
        method: 'GET',
        url: API_URL,
      })
        .then((res) => {
          commit("SET_POST_COMMENTS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },


    // 게시물의 댓글 등록
    registPostComment: function ({ dispatch, state }, comment) {


      const API_URL = `http://localhost:9999/ssafit/postComment/regist`;
      axios({
        method: 'POST',
        url: API_URL,
        data: {
          post_num: comment.post_num,
          comment_content: comment.comment_content,
          token: state.loginToken,
        }
      })
        .then(() => {
          dispatch("setPostComments", comment.post_num);
        })
        .catch((err) => {
          console.log(err);
        });
    },


    //게시물의 댓글 수정 // 동작 확인 완료
    updateComment: function ({ state }, postComment) {
      const API_URL = `http://localhost:9999/ssafit/postComment/tokenCheck`;
      axios({
        method: 'POST',
        url: API_URL,
        data: {
          token: state.loginToken,
          comment_writer_id: postComment.comment_writer_id,
        }
      })
        .then(() => {
          axios({
            method: 'POST',
            url: `http://localhost:9999/ssafit/postComment/update`,
            data: {
              comment_num: postComment.comment_num,
              comment_content: postComment.comment_content,
              comment_writer_id: postComment.comment_writer_id,
            }
          }).then(() => {
            console.log("수정되었음.");
          })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },


    //게시물의 댓글 삭제 //동작 확인 완료
    deleteComment: function ({ dispatch, state }, comment_num) {

      let token = state.loginToken

      const API_URL = `http://localhost:9999/ssafit/postComment/delete/${comment_num}/${token}`;
      axios({
        method: 'GET',
        url: API_URL,

      })
        .then(() => {
          dispatch("setPostComments", state.post.post_num);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // ==================================
    // --VIDEO--
    // ==================================
    searchYoutube: function ({ commit }, keyword) {
      const URL = `https://www.googleapis.com/youtube/v3/search`;
      const API_KEY = "AIzaSyCP7xN-lqoG-sSS9dvmCOxybIK3W2aey3A";
      axios({
        url: URL,
        method: "GET",
        params: {
          key: API_KEY,
          part: "snippet",
          q: "운동 " + keyword + " 운동",
          regionCode: "KR",
          type: "video",
          maxResults: 9,
        },
      })
        .then((res) => {

          commit("SET_SEARCH_VIDEOS", res.data.items)
        })
        .catch((err) => console.log(err));
    },

    setVideo: function ({ commit, state ,dispatch}, video) {
      for (let i = 0; i < state.search_videos.length; i++) {
        if (state.search_videos[i] === video) {
          commit("SET_VIDEO", video);
          console.log("여기 셋 비디오")
          console.log(video.id.videoId)
          dispatch("setVideoComments", video.id.videoId);
        }
      }
    },

    // ==================================
    // --VIDEOCOMMENT--
    // ==================================

    setVideoComments: async function ({ commit }, video) {
      const API_URL = `http://localhost:9999/ssafit/videoComment/read/${video}`;
      await axios({
        method: 'GET',
        url: API_URL,
      })
        .then((res) => {
          console.log(res.data)
          commit("SET_VIDEO_COMMENTS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    registVideoComment: function ({ dispatch, state }, videoComment) {
      const API_URL = `http://localhost:9999/ssafit/videoComment/regist`;
      console.log(state.loginToken)
      axios({
        method: 'POST',
        url: API_URL,
        data: {
          videocomment_video_id: videoComment.videocomment_video_id,
          videocomment_content: videoComment.videocomment_content,
          token: state.loginToken,
        },
      })
        .then(() => {
          alert("등록 완료!");
          dispatch("setVideoComments", videoComment.videocomment_video_id);
          //router.push(`/video/detail/${videoComment.videocomment_video_id}`);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    updateVideoComment : function({dispatch}, videoComment){
      const API_URL = `http://localhost:9999/ssafit/videoComment/update`;
      axios({
        method: 'POST',
        url: API_URL,
        data: videoComment,
      })
        .then(() => {
          dispatch("setVideoComments", videoComment.videocomment_video_id);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deleteVideoComment: function ({ state, dispatch }, payload) {
      const token = state.loginToken
      const API_URL = `http://localhost:9999/ssafit/videoComment/delete/${payload.videocomment_num}/${token}`;
      axios({
        method: 'GET',
        url: API_URL,

      })
        .then(() => {
          dispatch("setVideoComments", payload.videocomment_video_id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 캘린더, Record
    getRecods: function ({ state, commit }, date) {
      const token = state.loginToken
      console.log(date)
      console.log(date)
      const API_URL = `http://localhost:9999/ssafit/record/${date}/${token}`;
      axios({
        method: 'GET',
        url: API_URL,

      })
        .then((res) => {
          console.log(res)
          commit("GET_RECORD", res.data)

        })
        .catch((err) => {
          console.log(err);
        });
    },

    setMonthRecord: function ({ state, commit }) { // 1년치를 가져와야 할지?//그냥 내꺼 다가져오자
      const token = state.loginToken
      const API_URL = `http://localhost:9999/ssafit/record/${token}`;
      
      axios({
        method: 'GET',
        url: API_URL,

      })
        .then((res) => {
          console.log(res)
          commit("SET_MONTH_RECORD", res.data)

        })
        .catch((err) => {
          console.log(err);
        });
    },

    setMyEvents: function ({ state, commit }) { // 1년치를 가져와야 할지?//그냥 내꺼 다가져오자
      console.log(123)
      const token = state.loginToken
      const API_URL = `http://localhost:9999/ssafit/challenge/read/MyEvent/${token}`;
      console.log("setMyEvent")
      axios({
        method: 'GET',
        url: API_URL,

      })
        .then((res) => {
          console.log(res)
          commit("SET_MY_EVENTS", res.data)

        })
        .catch((err) => {
          console.log(err);
        });
    },

    submitExRecord: function ({ state, dispatch }, recordForm) { // 기록 보내기

      const API_URL = `http://localhost:9999/ssafit/record/submit`;
      axios({
        method: 'Post',
        url: API_URL,
        data: {
          record_part: recordForm.part,
          record_ex_memo: recordForm.memo,
          record_ex_time: recordForm.time,
          record_ex_date: recordForm.date,
          token: state.loginToken
        }
      })
        .then((res) => {
          console.log(res)
          dispatch("setMonthRecord");

        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateExRecord: function ({ dispatch }, recordForm) { // 기록 수정
      const API_URL = `http://localhost:9999/ssafit/record/update`;
      axios({
        method: 'Post',
        url: API_URL,
        data: {
          record_part: recordForm.record_part,
          record_ex_memo: recordForm.record_ex_memo,
          record_ex_time: recordForm.record_ex_time,
          record_ex_date: recordForm.record_ex_date,
          record_ex_num: recordForm.record_ex_num,
        }
      })
        .then((res) => {
          console.log(res)
          dispatch("setMonthRecord");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeExRecord: function ({ dispatch }, record_ex_num) { // 기록 삭제

      const API_URL = `http://localhost:9999/ssafit/record/remove/${record_ex_num}`;
      axios({
        method: 'DELETE',
        url: API_URL,

      })
        .then((res) => {
          console.log(res)
          dispatch("setMonthRecord");

        })
        .catch((err) => {
          console.log(err);
        });
    },

    setChallenges: function ({ commit, dispatch }, payload) {
      const API_URL = `http://localhost:9999/ssafit/challenge/list/${payload.challenge_sort}`;
      return axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          let resList = [];
          if (payload.location != "전국") {
            for (let i = 0; i < res.data.length; i++) {
              if (res.data[i].challenge_location === payload.location) {
                resList.push(res.data[i]);
              }
            }
            commit("SET_CHALLENGES", resList);
          } else {
            commit("SET_CHALLENGES", res.data);
          }
          dispatch("setMyChallenge");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    setMyChallenge: function ({ state, commit }) {
      const token = state.loginToken;
      const API_URL = `http://localhost:9999/ssafit/challenge/read/MyChallenge/${token}`;
      axios({
        method: 'GET',
        url: API_URL,
      })
        .then((res) => {
          commit("SET_MY_CHALLENGES", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },


    registChallenge: function ({ dispatch }, challenge) {
      dispatch;
      const API_URL = `http://localhost:9999/ssafit/challenge/create`;
      axios({
        method: 'POST',
        url: API_URL,
        data: challenge,
      })
        .then(() => {
          alert("등록되었습니다.");
          dispatch("setChallenges", {
            challenge_sort: challenge.challenge_sort,
            location: "전국",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },


    deleteChallenge: function ({ state, dispatch }, challenge) {
      const token = state.loginToken;
      const API_URL = `http://localhost:9999/ssafit/challenge/delete/${challenge.challenge_id}/${token}`;
      axios({
        method: 'DELETE',
        url: API_URL,

      })
        .then(() => {
          alert("삭제 완료!");
          dispatch("setChallenges", {
            challenge_sort: challenge.challenge_sort,
            location: "전국",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    addParticipant: function ({ dispatch, state }, challenge) {
      const API_URL = `http://localhost:9999/ssafit/challenge/add/participant`;
      axios({
        method: 'POST',
        url: API_URL,
        data: {
          participant_challenge_id: challenge.challenge_id,
          loginToken: state.loginToken,
        },
      })
        .then(() => {
          alert("참가완료.");
          dispatch("setChallenges", {
            challenge_sort: challenge.challenge_sort,
            location: "전국",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    deleteParticipant: function ({ state, dispatch }, challenge) {
      const token = state.loginToken;
      dispatch
      const API_URL = `http://localhost:9999/ssafit/challenge/cancle/${challenge.challenge_id}/${token}`;
      axios({
        method: 'DELETE',
        url: API_URL,

      })
        .then(() => {
          alert("취소되었습니다.");
          dispatch("setChallenges", {
            challenge_sort: challenge.challenge_sort,
            location: "전국",
          });  //이거 주석 풀면 요청은 제대로 받아오는데 리스트가 이상하게 안뜸
        })
        .catch((err) => {
          console.log(err);
        });
    },
    
    // ==================================
    // --MESSAGES--
    // ==================================
    setMessages: function ({ commit }, challenge_id) {
      console.log(challenge_id)
      console.log("이게 등록되고 다시 실행되어야지")
      const API_URL = `http://localhost:9999/ssafit/message/read`;
      axios({
        method: 'POST',
        url: API_URL,
        data: challenge_id,
      })
        .then((res) => {
          console.log("읽어오나요")
          console.log(res.data)
          commit("SET_MESSAGES", res.data);  //이거 주석 풀면 요청은 제대로 받아오는데 리스트가 이상하게 안뜸
        })
        .catch((err) => {
          console.log(err);
        });
    },

    registMessage: function ({ dispatch }, message) {
      console.log("등록하는액션에 왔음")
      console.log("로그인토큰이있나")
      console.log(message.message_writer_id);
      console.log(message.message_content);
      console.log(message.challenge_id);
      const API_URL = `http://localhost:9999/ssafit/message/regist`;
      axios({
        method: 'POST',
        url: API_URL,
        data: {
          challenge_id: message.challenge_id,
          message_writer_id: message.message_writer_id,
          message_content: message.message_content,
        },
      })
        .then(() => {
          console.log("등록됐나요")
          dispatch("setMessages", message.challenge_id);  //이거 주석 풀면 요청은 제대로 받아오는데 리스트가 이상하게 안뜸
        })
        .catch((err) => {
          console.log(err);
        });
    },

  },




  modules: {

  },
});