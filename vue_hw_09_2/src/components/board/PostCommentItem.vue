<template>
  <li>
    <p4>작성자:{{ postComment.comment_writer_id}}</p4>
    <p4>작성일자:{{ postComment.comment_created_at}}</p4>
    <p4>내용:{{ postComment.comment_content}}</p4>
  </li>
</template>

<script>
export default {
  name: 'PostCommentItem',
  props: {
    postComment: {
      type: Object,
      required: true,
    },
  },
  methods: {
    // clickVideo() {
    //   this.$store.dispatch('setVideo', this.video);
    // },
  },
};
</script>

<style>
</style>
