<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <div class="modal-content">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <button style="background: aqua; margin-right: 1rem" @click="$emit('go-home')">Save</button>
        <button @click="$emit('close-modal')">Close</button>
      </div>
    </div>
    <div class="close">
      <img class="close-img" src="https://www.freeiconspng.com/uploads/close-icon-47.png" alt=""/>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 30px 30px 60px 30px;
  border-radius: 20px;
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}
.modal-content {
  max-height: calc(85%);
  overflow-y: auto;
}
.modal-footer{
  margin-bottom: 1rem;
}
</style>
