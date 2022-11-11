<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="counter">
      <ul>
        <li v-for="todo in $store.getters.todos" :key="todo.id">
          {{ todo.title }} {{ todo.completed }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
};
</script>

<style>
p {
  font-size: 2rem;
  font-weight: bold;
}
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
