<template>
  <div>
    <div class="d-flex align-items-center mb-3">
      <b-progress class="w-100" :max="maxLoadingTime" height="1.5rem">
        <b-progress-bar :value="loadingTime" :label="`${((loadingTime / maxLoadingTime) * 100).toFixed(2)}%`"></b-progress-bar>
      </b-progress>

      <b-button class="ml-3" @click="startLoading()">Reload</b-button>
    </div>

    <!-- <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <b-card>
          <b-skeleton width="85%"></b-skeleton>
          <b-skeleton width="55%"></b-skeleton>
          <b-skeleton width="70%"></b-skeleton>
        </b-card>
      </template>
    </b-skeleton-wrapper> -->
    
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

  export default {
    name:"ProgressBar",
    data() {
      return {
        loading: false,
        loadingTime: 0,
        maxLoadingTime: 30,
        recordCnt: "",
        //recordCnt: this.MonthRecords.length(),
      }
    },
    watch: {
      loading(newValue, oldValue) {
        if (newValue !== oldValue) {
          this.clearLoadingTimeInterval()

          if (newValue) {
            this.$_loadingTimeInterval = setInterval(() => {
              this.loadingTime++
              if (this.loadingTime === this.recordCnt) {
                this.loading = false
              }
            }, 100)
          }
        }
      },
      loadingTime(newValue, oldValue) {
        if (newValue !== oldValue) {
          if (newValue === this.maxLoadingTime) {
            this.loading = false
          }
        }
      }
    },
    created() {
      this.$_loadingTimeInterval = null;
      this.$store.dispatch("setMonthRecord");
      console.log(this.MonthRecords.length);
      this.recordCnt=this.MonthRecords.length;
    },
    mounted() {
      this.startLoading()
    },
    methods: {
      clearLoadingTimeInterval() {
        clearInterval(this.$_loadingTimeInterval)
        this.$_loadingTimeInterval = null
      },
      startLoading() {
        this.loading = true;
        this.loadingTime = 0;
      }
    },
    computed: {
      ...mapState(["MonthRecords", "loginToken", "loginUserId"]),
      ...mapGetters(["challenge_eventList"]),
      },
  
  }
</script>