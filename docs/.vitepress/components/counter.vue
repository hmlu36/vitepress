<template>
  <div class="counter">
    <h1>{{ number }}</h1>
    <button type="button" @click="increment">Increment</button>
    <button type="button" @click="decrement">Decrement</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const number = ref(0);

const increment = () => {
  if (number.value >= 0) {
    number.value++;
  }
};

const decrement = () => {
  if (number.value > 0) {
    number.value--;
  }
};
</script>

<style scoped>
.counter {
  display: inline-block;
  margin-left: 30%;
}

button {
  display: inline-block;
  padding: 20px;
  margin: 10px;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgb(11, 11, 114);
  cursor: pointer;
}

h1 {
  text-align: center;
}
</style>
