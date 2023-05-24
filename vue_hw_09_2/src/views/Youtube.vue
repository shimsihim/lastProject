<template>
  <div class="bg-light">
    
    <div class="container-xxl bg-primary position-relative p-0" id="home">
      <div class="container-xxl hero-header">
        <div class="container">
          <page-title :title="`운동영상`" :msg="`운동 관련 영상을 검색할 수 있습니다.`"></page-title>
        </div>
      </div>
    </div>
          
    <router-view></router-view>
    <YoutubeSearchResult></YoutubeSearchResult>
    
  </div>
</template>

<script>
import PageTitle from "@/components/common/PageTitle.vue";
import YoutubeSearchResult from '@/components/youtube/YoutubeSearchResult.vue';

export default {
  name: "Video",
  components : {
    PageTitle,
    YoutubeSearchResult,
  },
  created() {
        this.$store.dispatch("searchYoutube", "전신");
    },

};
</script>



