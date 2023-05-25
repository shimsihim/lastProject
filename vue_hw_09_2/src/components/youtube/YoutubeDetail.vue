<template>
  <div class="container">

  <div class="card mt-4">
    <b-card-body>
      <b-card-title>{{ video.snippet.title }}</b-card-title>
      <div>채널명: {{ video.snippet.channelTitle }}</div>
      <div>
        <b-embed type="iframe" aspect="16by9" :src="`https://youtube.com/embed/${video.id.videoId}`" allowfullscreen></b-embed>
      </div>
    </b-card-body>
  </div>
    <youtube-comment-regist :video="video"></youtube-comment-regist>

      <div class="card mt-5 p-4 youtube-comment-card">
        <div class="youtube-comment-list">
          <youtube-video-comment-item
            v-for="videoComment in this.videoComments"
            :key="videoComment.videocomment_num"
            :videoComment="videoComment"
          ></youtube-video-comment-item>
        </div> 
      </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import YoutubeCommentRegist from "./YoutubeCommentRegist.vue";
import YoutubeVideoCommentItem from "./YoutubeVideoCommentItem.vue";

export default {
    name: "YoutubeDetail",
    
    components: {
      YoutubeCommentRegist,
      YoutubeVideoCommentItem,
    },
    computed: {
        ...mapState(["video","videoComments"]),
    },
    created() {
      console.log(213213213123+"생성중")
        const pathName = new URL(document.location).pathname.split("/");
        const video_id = pathName[pathName.length - 1];
        this.$store.dispatch("setVideo", video_id);
        
    },
    beforeUpdate(){   
      
     
    }
};
</script>
<style>
.youtube-comment-card{
  background-color: #afd7eeb9;
}
</style>