import { createApp } from "vue";

createApp({
  data() {
    return {
      message: "What are your plans today? 🙌",
      newTodo: '',
      todos: [
        { title: "Code a to-do list", done: false },
        { title: "Eat breakfast", done: true },
        { title: "Do some exercise", done: false },
        { title: "Water the plants", done: true }
      ]
    };
  },
  methods: {
    addTodo() {
      const trimmedTodo = this.newTodo.trim();
      if (trimmedTodo) {
        this.todos.push({ title: trimmedTodo, done: false });
        this.newTodo = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    }
  }
}).mount('#todosContainer');
