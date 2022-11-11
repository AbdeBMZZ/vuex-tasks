import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, title: "Todo 1", completed: false },
      { id: 2, title: "Todo 2", completed: false },
      { id: 3, title: "Todo 3", completed: false },
    ],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("addTodo", todo);
    },
  },
  getters: {
    todos: (state) => state.todos,
  },
  modules: {},
});
