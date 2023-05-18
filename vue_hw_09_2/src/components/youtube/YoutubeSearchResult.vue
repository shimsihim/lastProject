<template>
  <div>
    <h3>검색 결과</h3>
    <ul class="youtube-list">

      <!-- <div v-if="videos">
        <tr v-for="(video, index) in videos" :key="index">
          <video-card v-bind:video ="video"></video-card>
        </tr>
      </div> -->

      <!-- <video-card
        v-for="video in this.search_videos"
        :key="video.id.videoId"
        :video="video"
      ></video-card> -->

      <youtube-video-item
        v-for="video in this.search_videos"
        :key="video.id.videoId"
        :video="video"
      ></youtube-video-item>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import YoutubeVideoItem from './YoutubeVideoItem.vue';

export default {
  components: { 
    YoutubeVideoItem,
  },
  name: 'YoutubeSearchResult',
  computed: {
    ...mapState(['search_videos']),
  },
};
</script>

<style scoped>
.youtube-list {
  text-align: left;
}
</style>
