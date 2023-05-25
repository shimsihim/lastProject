<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-10">
        <div class="col-12 text-center">
            <div class="position-relative w-100 mt-3 comment_content">
                <input v-if="loginToken" id="videocomment_content" v-model="videocomment_content" class="view form-control border-0 w-100 ps-4 pe-5" type="text" placeholder="댓글을 등록하실 수 있습니다." style="height: 58px;">
                <input v-else readonly id="videocomment_content" v-model="videocomment_content" class="view form-control border-0 w-100 ps-4 pe-5" type="text" style="height: 58px;">
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
  name: "YoutubeCommentRegist",
  data() {
    return {
      videocomment_content : "",
      comment_none : "로그인 해주세요",
    };
  },
  props : {
    video: {
      type: Object,
      required: true,
    },
  },
  methods: {
    regist() {
      if (
        this.videocomment_content === "" 
      ) {
        alert("내용을 입력해주세요");
        return;
      }

      let videoComment = {
        videocomment_video_id : this.video.id.videoId,
        videocomment_content: this.videocomment_content,
      };

      this.$store.dispatch("registVideoComment", videoComment);
    },
  },
  computed: {
    ...mapState(["loginUser"]),
    ...mapState(["loginToken"]),
  },
};
</script>