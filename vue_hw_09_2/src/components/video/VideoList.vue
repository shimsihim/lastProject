<template>
  <div class="container">
    <h2>비디오 목록</h2>
    <div v-if="videos">
      <table class="user-list">
        <colgroup>
          <col style="width: 20%" />
          <col style="width: 40%" />
          <col style="width: 20%" />
          <col style="width: 20%" />
        </colgroup>
        <thead>
          <tr>
            <th>작성자</th>
            <th>제목</th> 
            <th>조회수</th> 
            <th>등록일</th> 
          </tr>
        </thead>
        <tbody>
          <tr v-for="(video, index) in videos" :key="index">
            <td>{{ video.video_title }}</td>
            <td>
              <router-link :to="`/board/detail/${video.video_id}`">
                <img  :src = "video.video_img"/> >
              </router-link>
            </td>
            <td>{{ video.video_viewCnt }}</td>
            <td>{{ video.video_zzimCnt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>등록된 게시물이 없습니다.</div>
    <button >등록하기</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";


export default {
  name: "PostList",
  methods: {
    change(video_part){
      this.$store.dispatch("setVideos",video_part);
    },
    // registPost(){
    //   this.$store.state.post = null;
    //   this.$router.push("/board/regist");
    // }
  },
  computed: {
    ...mapState(["videos"]),
    ...mapGetters(["videoCnt"]),
  },
  
  watch: {
      $route(to, form) {
      if (to.path !== form.path) this.change(this.$route.params.video_part);
    },
  },
  created() {
    const pathName = new URL(document.location).pathname.split("/");
    const video_part = pathName[pathName.length-1];
    this.$store.dispatch("setVideos",video_part);
  },
};
</script>

