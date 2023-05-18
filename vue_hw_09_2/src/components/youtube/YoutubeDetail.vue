<template>
  <div class="container">

  <h2>영상 상세</h2>
    <div>제목: {{ video.snippet.title }}</div>
    <div>채널명: {{ video.snippet.channelTitle }}</div>
    <b-card-body>
      <b-card-title>{{ video.snippet.title }}</b-card-title>
      <div>
        <b-embed type="iframe" aspect="16by9" :src="`https://youtube.com/embed/${video.id.videoId}`" allowfullscreen></b-embed>
      </div>
    </b-card-body>
     <!-- <div>링크: {{ video.video_url }}</div> 
     <div>조회수 : {{ video.video_viewCnt }}</div>
    <div>좋아요 수: {{ video.video_zzimCnt }}</div> -->

    <youtube-comment-regist :video="video"></youtube-comment-regist>
  </div>
</template>

<script>
import { mapState } from "vuex";
import YoutubeCommentRegist from "./YoutubeCommentRegist.vue";

export default {
    name: "YoutubeDetail",
    methods: {
    registComment() {
      this.$router.push("/video/comment/regist");
    }
    },
    components: {
      YoutubeCommentRegist,
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