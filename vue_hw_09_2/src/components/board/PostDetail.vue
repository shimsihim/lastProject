<template>
  <div class="container">
    <!-- <h2 class="my-4 text-center">게시글 상세 보기</h2> -->
    <div class="card mt-5 p-4 board-detail-card">
      <h2>{{ post.post_title }}</h2>
      <div>작성자: {{ post.post_writer_nickname }}</div>
      <hr />
      <div style="height:200px">{{ post.post_content }}</div>
      <hr />

      <div class="row">
        <div class="col-10">
          <div>작성일: {{ post.post_created_at.substring(0,16) }}</div>
          <div>조회수: {{ post.post_view_cnt }}</div>
        </div>
        <div class="col-2 justify-content-end">
          <!-- 좋아요 표시 아이콘 위치 -->
          <span class="h2 mb-6" @click="changeLike">
            <b-button v-if="likeChk" style="width: 80px; color: black; background-color: transparent; " variant="outline-info" >
              <i style="font-size: 1.23rem;" class="bi bi-heart-fill custom-icon"></i><br/>좋아요
              <!-- <b-icon icon="heart-fill" style="color:red" aria-hidden="true" ></b-icon><br> 좋아요 -->
            </b-button>
            <b-button v-else style=" width: 80px; color: black; background-color: transparent; " variant="outline-info" >
              <i class="bi bi-heart" style="font-size: 1.23rem;" aria-hidden="true"></i><br> 좋아요
            </b-button>
          </span>
        </div>
      </div>
      <!-- 작성자면 수정 삭제버튼 보이게 해줌 -->
      <div class="d-flex justify-content-center m-2">
      <div v-if="loginUserId === post.post_writer_id">
        <router-link to="/board/regist" class="btn btn-custom-modify text-dark">수정</router-link>
        <!-- 현재 store의 post는 해당 게시글로 저장되어있음 , regist페이지로 넘어가서 그대로 바인딩 시켜 현재의 글 내용 보여줌 -->
        <button class="btn btn-custom-delete text-dark" @click="deletePost">삭제</button>
      </div>
    </div>
    </div>


    <comment-regist :post="post"></comment-regist>

    <div class="card mt-5 p-4 board-comment-card">

      <div class="post-comment-list">
        <post-comment-item v-for="postComment in this.postComments" :key="postComment.comment_num"
          :postComment="postComment"></post-comment-item>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";
import PostCommentItem from "./PostCommentItem.vue";
import CommentRegist from "./CommentRegist.vue";

export default {
  name: "PostDetail",
  data(){
    return{
      post_num:0,
    }
  },
  methods: {
    changeLike(){
      this.$store.dispatch("likeChkReverse",this.post_num);
    },
    deletePost() {
      this.$store.dispatch("deletePost");
    },
  },
  components: {
    PostCommentItem,
    CommentRegist
  },
  computed: {
    ...mapState(["post", "postComments", "loginUserId","likeChk"]),
  },
  created() {
    const pathName = new URL(document.location).pathname.split("/");
    const post_num = pathName[pathName.length - 1];
    this.post_num = post_num
    this.$store.dispatch("setPost", post_num);
    this.$store.dispatch("setPostComments", post_num);
    this.$store.dispatch("setPostLike",post_num);
  },
};
</script>

<style scoped>

.board-detail-card {
  background-color: #77c2ee83;
}
.custom-icon {
  color: red; /* 원하는 색상으로 변경 */
}
.board-comment-card{
  background-color: #77c2ee83;
}

</style>