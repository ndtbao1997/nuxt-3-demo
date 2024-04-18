<template>
  <div class="container mx-auto mt-1">
    <FullCalendar
        :options="calendarOptions"
    />
  </div>
  <Modal class="modal-backdrop" v-show="showModal" @close-modal="handleModalClose">
    <h1 class="h1">Thêm các sự kiện vào ngày: {{datePicker}}</h1>
    <form>
      <input class="input" v-model="content" type="text" style="border: solid black 1px">
      <button class="button" type="button" @click="handleAddEvent">+</button>
    </form>
    <div class="v-for1" v-for="e in this.calendarOptions.events">
      <h1 class="v-for">+ {{e.title}}</h1>
      <button class="button1" type="button" @click="handleAddEvent">-</button>
    </div>
  </Modal>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import Modal from '~/components/Modal.vue'

export default {
  components: {
    FullCalendar,
    Modal
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        selectable: true,
        fixedWeekCount: false,
        events: [
          {title: 'nice event', date: '2024-04-18'},
          {title: 'another event', date: '2024-04-20'}
        ],
        locale: 'vi',
        validRange: {
          start: new Date()
        },
        selectMirror: false,
      },
      showModal: false,
      datePicker: "",
      content: "",
    }
  },
  mounted() {
    this.calendarOptions.dateClick = this.handleDateClick;
  },
  methods: {
    handleDateClick(info) {
      console.log(info);
      this.datePicker = info.dateStr;
      this.showModal = true;
    },
    handleModalClose() {
      this.showModal = false;
    },
    handleAddEvent(){
      if(this.content === ""){
        window.alert("khong duoc de trong")
      } else {
        this.calendarOptions.events = [...this.calendarOptions.events, {
          title: this.content,
          date: this.datePicker
        }];
        this.content = "";
      }
    }
  }
}
</script>


<style scoped>
@import "assets/css/tailwind.css";
.app {
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.input {
  border: solid 1px transparent;
  border-radius: 5px;
  padding: 8px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  margin-right: 1rem;
}

.input:hover,
.input:focus {
  border-color: blue;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}

.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.button1 {
  margin-left: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  height: 80%;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.button1:hover {
  background-color: #0056b3;
}

.button:hover {
  background-color: #0056b3;
}


.v-for {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  width: 85%;
}
.v-for1 {
  display: flex;
  align-items: center;
}
.h1 {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

</style>
