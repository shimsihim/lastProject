<template>
  <div class="container">
                    <h2 class="mt-5">댓글등록</h2>
                    <div class="row">
                      <div class="col-10">
                        <div class="col-12 text-center">
                            <div class="position-relative w-100 mt-3 comment_content">
                                <input v-if="loginToken" id="comment_content" v-model="comment_content" class="view form-control border-0 w-100 ps-4 pe-5" type="text" placeholder="댓글을 등록하실 수 있습니다." style="height: 58px;">
                                <input v-else readonly id="comment_content" v-model="comment_none" class="view form-control border-0 w-100 ps-4 pe-5" type="text" style="height: 58px;">
                            </div>
                        </div>
                      </div>
                      <div class="col-2">
                        <button class="btn btn-secondary text-dark" @click="regist">등록</button>
                      </div>
                    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "CommentRegist",
  data() {
    return {
      comment_content : "",
      comment_none : "로그인 해주세요",
    };
  },
 
  methods: {
    regist() {
      console.log("메소드 들어감")
      if (
        this.comment_content === "" 
      ) {
        alert("내용을 입력해주세요");
        return;
      }

      let comment = {
        post_num : this.post.post_num,
        comment_content: this.comment_content,
      };

      this.$store.dispatch("registPostComment", comment);
      this.comment_content = ""
    },
  },
  computed: {
    ...mapState(["loginUser"]),
    ...mapState(["post","loginToken"]),

  },
};
</script>

<style>
.btn-secondary {
  width : 100px;
  height : 80px;
  background-color: rgba(255, 255, 255, 0.388);
}
.btn-secondary:hover {
  background-color: rgba(84, 161, 224, 0.606);
}
</style>