<template>
  <li>
    <p4>작성자:{{ videoComment.videocomment_writer_id}}</p4>
    <p4>작성일자:{{ videoComment.videocomment_created_at}}</p4>
    <p4>내용:{{ videoComment.videocomment_content}}</p4>
  </li>
</template>

<script>
export default {
  name: 'YoutubeVideoCommentItem',
  props: {
    videoComment: {
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

<style></style>
