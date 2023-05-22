<template>
  <div>


    <header class="site-header d-flex flex-column justify-content-center align-items-center">
            <div class="container">
                <div class="row g-5">

                    <div class="col-lg-12 col-12 text-center">
                            <div class="position-relative w-100 mt-3">
                                <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" v-model="keyword" placeholder="검색어를 입력하세요" style="height: 58px;">
                                <button type="button" @click="search" class="btn btn-primary rounded-pill py-2 px-3 shadow-none position-absolute top-0 end-0 m-2">검색</button>
                            </div>
                        </div>
                    </div>
            </div>
      </header>

  </div>
</template>

<script>
export default {
  name: 'YoutubeSearch',
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    search() {
      this.$store.dispatch('searchYoutube', this.keyword);
    },
  },
};
</script>

<style></style>
