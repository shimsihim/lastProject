


<template>
    <div >
        <FullCalendar :options='calendarOptions' />
        <DayDetailModal ref="eventModal" @selectEvent="convertModal" @registEvent="addRecord"></DayDetailModal>
        <div style="text-align: center;">
            <button class="btn btn-secondary btn-secondary btn-secondary:hover registBtn"
                style="background-color: #2c3e507a;height: 50px;width: 200px;letter-spacing :10px;text-align: center;padding-left: 20px;padding-top: 10px;font-weight: bold;color: #ffffffc3;border-color: transparent;" @click="addRecord">기록하기</button>
        </div>
        <AddRecordModal ref="add"></AddRecordModal>
        <UpdateRecordModal ref="update"></UpdateRecordModal>
    </div>
</template>



<script>

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { mapState } from "vuex";
import DayDetailModal from './DayDetailModal.vue';// 모달창 추가
import AddRecordModal from './AddRecordModal.vue';// 기록 모달창 추가
import UpdateRecordModal from './UpdateRecordModal.vue';// 수정 모달창 추가
export default {

    components: {
        FullCalendar, DayDetailModal, AddRecordModal, UpdateRecordModal
    },
    data: function () {
        return {
            showModal: false, //true일 때 하루 기록 모달창 보여짐
            addModal: false, //기록추가 모달 제어
            updateModal: false, //기록 수정용 

            //여기부터 캘린더 옵션
            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin], // 월뷰, 상호작용 플러그인
                initialView: 'dayGridMonth', // 초기 월 뷰로 보여줌
                weekends: true, // 주말 나타냄
                dateClick: this.handleDateClick, // 날짜 클릭 시 실행될 함수
                events: [
                    { title: "안녕", start: '2023-05-17' }
                ],
                headerToolbar: { // 달력 상부에 띄울 항목들
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth'
                },
                borderColor: "black",
                eventClick: this.handleEventClick,
                displayEventTime: false



            }
            //여기까지 캘린더 옵션
        }
    },
    created() {

        this.$store.dispatch("setMyEvents");
        this.$store.dispatch("setMonthRecord");



    },
    methods: {
        handleDateClick: function (arg) { // 날짜 클릭 시 발생 메소드로 ARG에는 해당 날짜의 기록들이 들어있음
            console.log(arg)
            this.$store.dispatch("getRecods", arg.dateStr); // 해당 날짜의 기록 가져옴
            // 모달 표시
            this.$refs.eventModal.showModal = true;
        },
        handleEventClick(info) { // 특정 이벤트 클릭 시 발생하는 이벤트

            // console.log(info)
            // console.log(info.event.id)
            console.log(this.MonthRecords)
            var item
            for (let i = 0; i < this.MonthRecords.length; ++i) {
                console.log(this.MonthRecords[i].record_ex_num)
                if (this.MonthRecords[i].record_ex_num == info.event.id) {
                    console.log("같아유")
                    item = this.MonthRecords[i]
                    break
                }
            }
            console.log("여기 밑 아이템")
            console.log(item)
            this.$refs.update.pro = item
            var d = new Date(item.record_ex_date) // 날짜 형식으로 변환
            console.log("날짜출력")
            console.log("날짜출력")
            console.log("날짜출력")
            console.log(d);
            console.log(d);
            this.$refs.update.pro.record_ex_date = d;
            //this.$refs.update.pro.record_ex_date = d.getFullYear() + "-" + (((d.getMonth() + 1).toString().le ngth) == 1 ? ("0" + (d.getMonth() + 1)) : d.getMonth() + 1) + "-" + (((d.getDate()).toString().length) == 1 ? ("0" + (d.getDate())) : d.getDate())

            this.$refs.update.updateModal = true


        },
        addRecord() {
            // 기록 추가 표시
            this.$refs.add.addModal = true;
            this.$refs.eventModal.showModal = false;
        },
        convertModal(item) {

            this.$refs.eventModal.showModal = false
            this.$refs.update.updateModal = true
            this.$refs.update.pro = item


            var d = new Date(item.record_ex_date) // 날짜 형식으로 변환
            this.$refs.update.pro.record_ex_date = d;
            //this.$refs.update.pro.record_ex_date = d.getFullYear() + "-" + (((d.getMonth() + 1).toString().length) == 1 ? ("0" + (d.getMonth() + 1)) : d.getMonth() + 1) + "-" + (((d.getDate()).toString().length) == 1 ? ("0" + (d.getDate())) : d.getDate())


        },



    },
    computed: {
        ...mapState(["MyEvents", "MonthRecords"]),
        ...mapState(["Records"]),
        check_month_record() { return this.$store.getters.get_month_record }, // 전체기록 getter로 가져오기

    },
    watch: {
        check_month_record(MonthRecords) { // 전체기록이 변경되면 이를 감시하고 computed의 getter를 통해 가져옴
            this.calendarOptions.events = [];
            for (let i = 0; i < MonthRecords.length; ++i) {
                var d = new Date(MonthRecords[i].record_ex_date) // 날짜 형식으로 변환
                this.calendarOptions.events.push({
                    title: MonthRecords[i].record_ex_memo, start: d
                    , borderColor: "red", allDay: false, id: MonthRecords[i].record_ex_num
                })
                // this.calendarOptions.events.push({ title: MonthRecords[i].record_ex_memo, start: d.getFullYear() + "-" + (((d.getMonth() + 1).toString().length) == 1 ? ("0" + (d.getMonth() + 1)) : d.getMonth() + 1) + "-" + (((d.getDate()).toString().length) == 1 ? ("0" + (d.getDate())) : d.getDate())
                // , borderColor: "red",allDay : false, id : MonthRecords[i].record_ex_num  }) // 배열을 초기화한 후 다시 넣어줌
                //위에서 식이 길어진 이유는 스프링에서 js로 date값을 받을 때 밀리초 단위로 바꿔 받는데
                //이를 한번에 2000-01-01과 같은 형식으로 바꾸는 법을 못찾겠음
                //단순하게 바꿔서 자르면 1일 이전의 값이 들어감....

            }
            for (let i = 0; i < this.MyEvents.length; ++i) {
                console.log("여기는 이벤트 주입 중")
                var st = new Date(this.MyEvents[i].challenge_startDate) // 날짜 형식으로 변환
                var ed = new Date(this.MyEvents[i].challenge_endDate) // 날짜 형식으로 변환
                this.calendarOptions.events.push({
                    title: this.MyEvents[i].challenge_title, start: st,
                    end: ed,
                    borderColor: "rgba(255, 243, 82, 0.356)",
                })
                // this.calendarOptions.events.push({ title: this.MyEvents[i].challenge_title, start: st.getFullYear() + "-" + (((st.getMonth() + 1).toString().length) == 1 ? ("0" + (st.getMonth() + 1)) : st.getMonth() + 1) + "-" + (((st.getDate()).toString().length) == 1 ? ("0" + (st.getDate())) : st.getDate()),
                //                                         end: ed.getFullYear() + "-" + (((ed.getMonth() + 1).toString().length) == 1 ? ("0" + (ed.getMonth() + 1)) : ed.getMonth() + 1) + "-" + (((ed.getDate()).toString().length) == 1 ? ("0" + (ed.getDate())) : ed.getDate()),
                //                                          borderColor: "rgba(255, 243, 82, 0.356)", }) // 배열을 초기화한 후 다시 넣어줌
                //위에서 식이 길어진 이유는 스프링에서 js로 date값을 받을 때 밀리초 단위로 바꿔 받는데
                //이를 한번에 2000-01-01과 같은 형식으로 바꾸는 법을 못찾겠음
                //단순하게 바꿔서 자르면 1일 이전의 값이 들어감....

            }

        },

    }
}
</script>
<style>
:root {
    --fc-border-color: black;
    color: #ffffffc3;
    --fc-daygrid-event-dot-width: 5px;
}

* {
    color: black;
}

.fc-daygrid-day-number {
    color: black;
}

.fc-col-header-cell-cushion {
    color: black;
    /* 월화수목금토일 색상 */
    background-color: #ffffff00;
}

.fc-scrollgrid-sync-inner {
    background-color: #ffffff4f;
    /* 달력의 배경색, 즉 네모칸의 배경색 */

}

/*긴줄 이벤트의 높이 설정 */
.fc-event-title-container {
    height: 15px
}

.fc-dayGridMonth-button {
    background-color: red;
}

.fc-button-active {
    background-color: red;
}

.fc-dayGridMonth-button.fc-button.fc-button-primary.fc-button-active {
    background-color: #2c3e5094;

    filter: contrast(80%);
    border-color: transparent;
}

.fc-prev-button.fc-button.fc-button-primary {
    background-color: #2c3e5094;
    filter: contrast(80%);
    border-color: transparent;
}

.fc-next-button.fc-button.fc-button-primary {
    /* 이전버튼 */
    background-color: #2c3e5094;
    filter: contrast(80%);
    border-color: transparent;
}

.fc-today-button.fc-button.fc-button-primary {
    background-color: #2c3e50d6;
    filter: contrast(80%);
    border-color: transparent;
}

.fc-h-event {
    text: white;
    background-color: rgba(255, 243, 82, 0.356);
    /* 여기가 긴줄 이벤트 배경색*/

}

.fc-event.fc-event-start.fc-event.fc-event-start.fc-daygrid-event.fc-daygrid-block-event .fc-daygrid-block-event.fc-h-event {
    margin-bottom: "100px";
}

.fc-event fc-event-start.fc-daygrid-event.fc-daygrid-block-event.fc-h-event {
    margin-bottom: "100px";
}

.fc-toolbar-title {
    /* 몇년 몇월의 색 */
    color: rgba(0, 0, 0, 0.707);
    font: 500px;
}

.fc-toolbar-title {
    padding-right: 100PX;
}

.btn-secondary {
    width: 100px;
    background-color: rgb(182, 185, 192);
}

.btn-secondary:hover {
    background-color: rgb(159, 162, 169);
}

</style>