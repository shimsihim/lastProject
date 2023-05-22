<template>
  <div>
    <page-title :title="`운동영상`" :msg="`운동 관련 영상을 검색할 수 있습니다.`"></page-title>
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



