
<template>
  <div>
    <page-title :title="`운동영상`" :msg="`운동 관련 영상을 검색할 수 있습니다.`"></page-title>

    <router-view></router-view>
  </div>
</template>

<script>
import PageTitle from "@/components/common/PageTitle.vue";

export default {
  name: "Video",
  components : {
    PageTitle,
  }
};
</script>



