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
    // loginUser: null,
    loginToken:null,
    randomUser: null,
    posts : [],
    post : {},
    postComments : [],
    video: {},
    videoComments: [],
    search_videos:[],
    idChk: "",
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
  },
  mutations: {
    CREATE_USER: function (state, user) {
      state.users.push(user);
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
    // SET_LOGIN_USER: function (state, user) {
    //   state.loginUser = user;
    // },
    SET_LOGIN_TOKEN: function(state, token){
      state.loginToken = token;
    },
    LOGOUT: function (state) {
      state.loginToken = null;
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
    SET_POST_COMMENTS: function (state, postComments){
      state.postComments = postComments;
    },
    ADD_POST: function (state, post) {
      state.posts.push(post);
    },
    SET_VIDEOS: function (state, videos) {
      state.videos= videos;
    },
    SET_VIDEO: function (state, video) {
      state.video = video;
    },
    SET_SEARCH_VIDEOS: function (state, search_videos){
      state.search_videos = search_videos;
    },
    SET_VIDEO_COMMENTS: function (state, videoComments){
      state.videoComments = videoComments;
    },
    ADD_VIDEO_COMMENT: function (state, videoComment){
      state.videoComments.push(videoComment);
    },

  },
  actions: {

    // ==================================
    // --USER--
    // ==================================

    createUser: function ({ commit }, user) {
      console.log(user)
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
          console.log("user setting...");
          console.log(res.data);
          commit("SET_USERS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    
    updateUser: function ({commit}, loginUser) {
      console.log(commit);
      const API_URL = `http://localhost:9999/ssafit/user/updateUserInfo`;
      axios({
        url: API_URL,
        method: "POST",
        data: loginUser,
      })
      .then(() => {
        alert("수정 완료!");
        router.push("/user");
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
    
    setUser: function ({ commit }, id) {
      const API_URL = `http://localhost:9999/userapi/user/${id}`;
      axios({
        url: API_URL,
        method: "GET",
      })
      .then((res) => {
          commit("SET_USER", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      },
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
      setLoginUser: function ({ commit }, user) {
        const API_URL = `http://localhost:9999/ssafit/user/login`;
        console.log("setLoginUser")
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
              router.push("/");
            }
            else{
              alert("로그인 실패!");
            }
          })
          .catch(() => {
            console.log("실패!")
            alert("로그인 실패");
          });
      },
        setRandomUser: async function ({ commit }) {
      const API_URL = `https://random-data-api.com/api/users/random_user`;

      try {
        const res = await axios.get(API_URL);
        let user = {
          id: res.data.username,
          password: res.data.password,
          name: res.data.first_name,
          email: res.data.email,
          age: Math.floor(Math.random() * (99 - 20)) + 20,
        };
        commit("SET_RANDOM_USER", user);
      } catch (err) {
        console.log(err);
      }
    },

    // ==================================
    // --POST--
    // ==================================

    setPosts: function ({ commit },board_id) {
      const API_URL = `http://localhost:9999/ssafit/post/board/${board_id}`;
      return axios({
        url: API_URL,
        method: "GET",
      })
        .then((res) => {
          console.log(res.data)
          commit("SET_POSTS", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createPost : function({commit} , post){
      const API_URL = `http://localhost:9999/ssafit/post/regist`;
      return axios({
        url: API_URL,
        method: "POST",
        data : post,
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
    setPost : function ( {commit}, post_num) {
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

  deletePost: function ({state}) {
    const post_num = state.post.post_num;
    const API_URL = `http://localhost:9999/ssafit/post/delete/${post_num}`;
    const board_id = state.post.post_board_id;
    console.log(state.post)
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

  setPostComments : function ( {commit}, post_num) {
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

    // ==================================
    // --VIDEO--
    // ==================================
  searchYoutube : function ({commit}, keyword) {
    const URL = `https://www.googleapis.com/youtube/v3/search`;
    const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;
    axios({
      url: URL,
      method: "GET",
      params: {
        key: API_KEY,
        part: "snippet",
        q: "운동"+ keyword +"운동",
        regionCode:"KR",
        type: "video",
        maxResults: 10,
      },
    })
      .then((res) => {
        console.log(res);
        commit("SET_SEARCH_VIDEOS", res.data.items)
      })
      .catch((err) => console.log(err));
  },

      setVideo : function ({commit, state}, video){
        for (let i=0; i<state.search_videos.length; i++) {
          if(state.search_videos[i] === video){
            commit("SET_VIDEO", video);
          }
        }
      },

    // ==================================
    // --VIDEOCOMMENT--
    // ==================================

    setVideoComments : function ( {commit}, video_id) {
      const API_URL = `http://localhost:9999/ssafit/videoComment/read/${video_id}`;
      axios({
        method: 'GET',
        url: API_URL,
    })
      .then((res) => {
        commit("SET_VIDEO_COMMENTS", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    },

    registVideoComment : function ({commit}, videoComment){
    const API_URL = `http://localhost:9999/ssafit/videoComment/regist`;
    axios({
      method: 'POST',
      url: API_URL,
      data : videoComment,
    })
    .then(() => {
      alert("등록 완료!");
      commit("ADD_VIDEO_COMMENT", videoComment);
      //router.push(`/video/detail/${videoComment.videocomment_video_id}`);
    })
    .catch((err) => {
      console.log(err);
    });
    },


  },

  


  modules: {

  },
});