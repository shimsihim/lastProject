<template>
  <b-modal v-model="showModal" title="이벤트 정보" class="custom-modal">

    <b-table striped hover :items="Records" :fields="fields" :labels="labels" @row-clicked="seletOne"></b-table>
    <a class="btnJoin btn btn-primary" @click="regist">추가 등록</a>
  </b-modal>
</template>
  
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      fields: [ { key: 'record_part', label: '운동부위' }, { key: 'record_ex_time', label: '운동 시간' },{ key: 'record_ex_memo', label: '메모' }], // Records에서 원하는 값 전하기 및 순서
      
      showModal: false,
      eventInfo: ''
    };
  },
  methods: {
    seletOne(item) {
      console.log("여기는 행 선택")
      this.$emit("selectEvent",item)
    },
    regist(){
      console.log("여기는 버튼 선택")

      this.$emit("registEvent")
    }
  },

  computed: {
    ...mapState(["Records"]),
  },
};
</script>
<style>
.custom-modal .modal-dialog {
  overflow-y: auto;
  display: flex;
  flex-direction: row;
}
</style>