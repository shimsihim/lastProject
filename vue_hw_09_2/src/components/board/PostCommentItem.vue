<template>
  <div class="card m-2 px-4 py-3 youtube-comment-card-item">
    
    <div class="row">
      <span class="col-9 h5">{{ postComment.comment_writer_id}}</span>
      <span class="col-3 text-end">{{ postComment.comment_created_at.substring(2,16)}}</span>
  </div>
  <div class="row">
  <div class="p-3">{{ postComment.comment_content}}</div>
    <div v-if="loginUserId === postComment.comment_writer_id">
      
      <div v-if="showUpdateForm">
      <form>
      <label for="comment_content">내용</label>
      <textarea
        id="comment_content"
        v-model="comment_content"
        class="view"
      ></textarea>
      <button @click="updateComment">수정완료</button>
    </form>
    </div>

    <div class="d-flex justify-content-end">
    <button class="btn" @click="showForm" >수정</button>
      <button class="btn" @click="deleteComment">삭제</button>
    </div>
  </div>
</div> 
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'PostCommentItem',
  data() {
    return{
      showUpdateForm : false,
      comment_content : this.postComment.comment_content,
    };
  },
  props: {
    postComment: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showForm() {
      this.showUpdateForm = true;
    },
    updateComment() {
      this.postComment.comment_content = this.comment_content;
      this.$store.dispatch("updateComment",this.postComment);
      this.showUpdateForm = false;
    },
    deleteComment() {
      this.$store.dispatch("deleteComment",this.postComment.comment_num)
    },

  },
  computed: {
    ...mapState([ "loginUserId"]),
  },
};
</script>

<style>
</style>
