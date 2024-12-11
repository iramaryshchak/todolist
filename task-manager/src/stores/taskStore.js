/* eslint-disable prettier/prettier */
import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task);
      this.saveTasks();
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
      this.saveTasks();
    },
    toggleTaskStatus(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
        this.saveTasks();
      }
    },
    saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
});
