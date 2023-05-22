<template>
  <li>
    <span>작성자:{{ videoComment.videocomment_writer_id}}</span>
    <span>작성일자:{{ videoComment.videocomment_created_at}}</span>
    <span>내용:{{ videoComment.videocomment_content}}</span>
  
    <div v-if="loginUserId === videoComment.videocomment_writer_id">
      <button class="btn" @click="updateComment">수정</button>
      <button class="btn" @click="deleteComment">삭제</button>
    </div>

  </li>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'YoutubeVideoCommentItem',
  props: {
    videoComment: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateComment() {

    },
    deleteComment() {
      this.$store.dispatch("deleteVideoComment",{
        videocomment_num : this.videoComment.videocomment_num,
        videocomment_video_id : this.videoComment.videocomment_video_id,
      })
    },

  },
  computed: {
    ...mapState([ "loginUserId"]),
  },
};
</script>

<style></style>
