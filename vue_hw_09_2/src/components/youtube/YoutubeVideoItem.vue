<template>
  <div class="col-3"> 
    <div class="card mb-4 feature-item search-result-card" @click="clickVideo" style="width: 18rem;">
        <router-link class="no-style-link" :to="`/video/detail/${video.id.videoId}`">
    <img :src="video.snippet.thumbnails.high.url" class="card-img-top" >
    <div class="card-body">
      <div class="search-result-card-title"><h5 class="card-title">{{ video.snippet.title.substr(0,45) }}</h5></div>
      <p class="card-text">{{ video.snippet.channelTitle }}</p>
      <p class="card-text">게시일 : {{ video.snippet.publishTime.substr(0,10) }}</p>
    </div>
  </router-link>
</div>
</div>
</template>

<script>
export default {
  name: 'YoutubeVideoItem',
  
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
  methods: {
    clickVideo() {
      this.$store.dispatch('setVideo', this.video);
    },
  },
};
</script>

<style>

.search-result-card {
  height : 400px;
}

.search-result-card-title {
  height : 80px;
}

a:hover {
  text-decoration-line: none;  
}

.no-style-link:hover {
  text-decoration-line: none; 
}
</style>
