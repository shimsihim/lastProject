<template>
  <div class="container text-center mt-5">
    <h2>{{boardTitle[boardIdx-1]}}</h2>
    <h4 class="mb-3">등록된 게시글 : {{ postCnt }}개</h4>
    <div class="d-flex justify-content-end mb-2">
      <button v-if="loginToken" class="btn btn-secondary text-dark" @click="registPost">등록하기</button>
      </div>
    <div v-if="postCnt">
      
      <table class="table table-striped table-hover post-list text-dark">
        <colgroup>
          <col style="width: 10%" />
          <col style="width: 40%" />
          <col style="width: 15%" />
          <col style="width: 15%" />
          <col style="width: 20%" />
        </colgroup>
        <thead>
          <tr class="text-center">
            <th scope="col-2">글번호</th>
            <th scope="col-4">제목</th>
            <th scope="col-4">작성자</th>
            <th scope="col-2">조회수</th>
            <th scope="col-2">등록일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in posts" :key="index">
            <td>{{ index+1 }}</td>
            <td>
              <router-link class="link-dark post-list-item" :to="`/board/detail/${post.post_num}`">{{
                post.post_title
              }}</router-link>
            </td>
            <td>{{ post.post_writer_nickname }}</td>
            <td>{{ post.post_view_cnt }}</td>
            <td>{{ post.post_created_at.substring(0,10) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>등록된 게시물이 없습니다.</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";


export default {
  name: "PostList",
  data(){
    return{
    boardTitle:["공지사항","자유게시판","운동정보","식단정보"],
    boardIdx:0,
  }
  },
  methods: {
    change(board_id){
      this.$store.dispatch("setPosts",board_id);
    },
    registPost(){
      this.$store.state.post ={
        post_writer_id: "",
        post_board_id: "",
        post_title: "",
        post_content: "",
      };
      this.$router.push("/board/regist");
    },
  },
  computed: {
    ...mapState(["posts"]),
    ...mapState(["loginToken"]),
    ...mapGetters(["postCnt"]),

  },
  
  watch: {
      $route(to, form) {
      if (to.path !== form.path) {
      this.change(this.$route.params.board_id);// 게시판 이동 시 마다 주소값을 확인하여 게시판 종류에 맞는 게시글 나타냄
      this.boardIdx = this.$route.params.board_id;
      }
    },
  },
  created() {
    const pathName = new URL(document.location).pathname.split("/");
    console.log(pathName);
    const post_board_id = pathName[pathName.length - 1];
    this.$store.dispatch("setPosts",post_board_id);
    this.boardIdx = post_board_id;
  },
};
</script>

<style scoped>
.post-list-item {
  text-decoration-line: none;
}
.btn-secondary {
  width : 100px;
  height : 40px;
  background-color: rgba(255, 255, 255, 0.388);
}
.btn-secondary:hover {
  background-color: rgba(84, 161, 224, 0.606);
}

</style>