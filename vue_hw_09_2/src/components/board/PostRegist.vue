<template>
  <div class="container">
    <h4 class="text-center mt-5 mb-3">게시글 등록하기</h4>
    <div class="d-flex justify-content-center">
    <div class="row text-center col-8">
      <select class="form-select col-2 m-3" name="post_board_id" v-model="post.post_board_id">

        <option :value="1">공지</option>
        <option :value="2">자유</option>
        <option :value="3">정보</option>
        <option :value="4">식단</option>
      </select>

      <div>
        <b-form-input
          v-model="post.post_title"
          placeholder="제목을 입력해주세요"
        ></b-form-input>
      </div>


      <div>
          <b-form-textarea
            id="textarea"
            v-model="post.post_content"
            placeholder="내용을 입력해주세요..."
            rows="20"
            max-rows="20"
            class="mt-3"
          ></b-form-textarea>

        </div>

     
    <div class="d-flex justify-content-center">
      <button class="btn btn-custom-regist m-2" @click="regist">등록</button>
    </div>
    </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "PostRegist",
  methods: {
    regist() {
      if (
        this.post.post_board_id === "" ||
        this.post.post_title === "" ||
        this.post.post_content === ""
      ) {
        alert("모든 내용을 입력해주세요");
        return;
      }

      this.$store.dispatch("createPost", this.post);
    },
  },
  computed: {
    ...mapState(["post"]),
  },
};
</script>