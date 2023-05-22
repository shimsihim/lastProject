<template>
  <li>
<<<<<<< HEAD
    <p>작성자:{{ videoComment.videocomment_writer_id}}</p>
    <p>작성일자:{{ videoComment.videocomment_created_at}}</p>
    <p>내용:{{ videoComment.videocomment_content}}</p>
=======
    <span>작성자:{{ videoComment.videocomment_writer_id}}</span>
    <span>작성일자:{{ videoComment.videocomment_created_at}}</span>
    <span>내용:{{ videoComment.videocomment_content}}</span>
>>>>>>> ed769f63a6163a23dec3673c78f7953caec8f57b
  
    <div v-if="loginUserId === videoComment.videocomment_writer_id">

      <div v-if="showUpdateForm">
        <form>
        <label for="videocomment_content">내용</label>
        <textarea
          id="videocomment_content"
          v-model="videocomment_content"
          class="view"
        ></textarea>
        <button @click="updateComment">수정완료</button>
      </form>
      </div>

      <button class="btn" @click="showForm">수정</button>
      <button class="btn" @click="deleteComment">삭제</button>
    </div>

  </li>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'YoutubeVideoCommentItem',
  data() {
    return{
      showUpdateForm : false,
      videocomment_content : this.videoComment.videocomment_content,
    };
  },
  props: {
    videoComment: {
      type: Object,
      required: true,
    },
  },
  methods: {

    showForm() {
      this.showUpdateForm = true;
    },
    updateComment() {
      this.videoComment.videocomment_content = this.videocomment_content;
      this.videoComment.loginToken = this.loginToken;
      this.$store.dispatch("updateVideoComment",this.videoComment);
      this.showUpdateForm = false;
    },
    deleteComment() {
      this.$store.dispatch("deleteVideoComment",{
        videocomment_num : this.videoComment.videocomment_num,
        videocomment_video_id : this.videoComment.videocomment_video_id,
      })
    },

  },
  computed: {
    ...mapState([ "loginUserId", "loginToken"]),
  },
};
</script>

<style></style>
