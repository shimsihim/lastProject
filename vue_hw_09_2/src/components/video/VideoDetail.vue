<template>
  <div class="container">
    <h2>영상 상세</h2>
    <div>제목: {{video.video_title }}</div>
    <div>채널명: {{video.video_channelName }}</div>
    <div>링크 : {{video.video_viewCnt }}</div>
    <div>조회수: {{video.video_url }}</div>
    
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
  name: "VideoDetail",
  methods: {
  },
  computed: {
    ...mapState(["video"]),
    },
  created() {
    const pathName = new URL(document.location).pathname.split("/");
    const video_id = pathName[pathName.length - 1];
    this.$store.dispatch("setVideo", video_id);
  },
};
</script>