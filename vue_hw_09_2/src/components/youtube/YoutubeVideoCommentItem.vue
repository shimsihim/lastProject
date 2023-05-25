<template>
    <div class="card m-2 px-4 py-3 youtube-comment-card-item">
      <div class="row">
        <span class="col-9 h5">{{ videoComment.videocomment_writer_id}}</span>
        <span class="col-3 text-end">{{ videoComment.videocomment_created_at.substring(2,16)}}</span>
      </div>
      <div class="row">
        <div class="p-3">{{ videoComment.videocomment_content}}</div>
      
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
          <div class="d-flex justify-content-end">
            <button class="btn" @click="showForm">수정</button>
            <button class="btn" @click="deleteComment">삭제</button>
          </div>
        </div>
      </div>

  </div>

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

<style>
.youtube-comment-card-item{
  background-color: #b5ddf4ee;
}
</style>
