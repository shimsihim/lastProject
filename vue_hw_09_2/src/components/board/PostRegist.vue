<template>
  <div class="container">
    <h2>글등록</h2>
    <fieldset class="text-center">
      <div v-if="post == null">
        <select name="post_board_id" v-model="post_board_id">
          <option :value="1">공지</option>
          <option :value="2" >자유</option>
          <option :value="3">정보</option>
          <option :value="4" selected>식단</option>
        </select>
        <label for="post_title">제목</label>
        <input type="text" id="post_title" v-model="post_title" class="view" /><br />
        <label for="post_content">내용</label>
        <textarea
          id="post_content"
          v-model="post_content"
          class="view"
        > </textarea><br/> 
      </div>
      <div v-else>
        <label for="post_title">제목</label>
        <input type="text" id="post_title" v-model="post.post_title" class="view" /><br />
        <label for="post_content">내용</label>
        <textarea
          id="post_content"
          v-model="post.post_content"
          class="view"
        > </textarea><br /> 
      </div>
        <button v-if="post == null" class="btn" @click="regist">등록</button>
        <button  v-else class="btn" @click="update">수정등록</button>
    </fieldset>
    
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "PostRegist",
  data() {
    return {
      post_board_id : "",
      post_writer_id : "",
      post_title: "",
      post_content: "",
    };
  },
  methods: {
    regist() {
      if (
        this.post_title === "" ||
        this.post_content === "" 
      ) {
        alert("모든 내용을 입력해주세요");
        return;
      }

      let post = {
        post_writer_id : this.loginUser.user_id,
        post_board_id : this.post_board_id,
        post_title: this.post_title,
        post_content: this.post_content,

      };

      this.$store.dispatch("createPost", post);
    },
    update(){
      if (
        this.post.post_title == "" ||
        this.post.post_content == "" 
      ) {
        alert("모든 내용을 입력해주세요");
        return;
      }

      let updated_post = {
        post_writer_id : this.loginUser.user_id,
        post_board_id : this.post.post_board_id,
        post_title: this.post.post_title,
        post_content: this.post.post_content,
        post_num: this.post.post_num,
      };
      this.$store.dispatch("updatePost", updated_post);
    },
  },
  computed: {
    ...mapState(["loginUser"]),
    ...mapState(["post"]),
  },
};
</script>