<template>
  <div class="container mt-5">
    <h2>Додати нове завдання</h2>
    <form @submit.prevent="addTask">
      <!-- Назва завдання -->
      <div class="mb-3">
        <label for="taskName" class="form-label">Назва завдання</label>
        <input
          type="text"
          id="taskName"
          v-model="taskName"
          class="form-control"
          placeholder="Введіть назву завдання"
          required
        />
      </div>

      <!-- Опис завдання -->
      <div class="mb-3">
        <label for="taskDescription" class="form-label">Опис завдання</label>
        <textarea
          id="taskDescription"
          v-model="taskDescription"
          class="form-control"
          placeholder="Введіть опис завдання"
        ></textarea>
      </div>

      <!-- Дедлайн завдання -->
      <div class="mb-3">
        <label for="taskDeadline" class="form-label">Дедлайн</label>
        <input
          type="date"
          id="taskDeadline"
          v-model="taskDeadline"
          class="form-control"
          required
        />
      </div>

      <!-- Кнопка додавання завдання -->
      <button type="submit" class="btn btn-primary">Додати завдання</button>
    </form>
  </div>
</template>

<script>
import { useTaskStore } from "@/stores/taskStore"; // або ваш шлях

export default {
  data() {
    return {
      taskName: "",
      taskDescription: "",
      taskDeadline: "",
    };
  },
  methods: {
    addTask() {
      if (this.taskName && this.taskDeadline) {
        const newTask = {
          id: Date.now(), // використовуємо поточний час для унікального id
          name: this.taskName,
          description: this.taskDescription,
          deadline: this.taskDeadline,
          completed: false,
        };

        // Викликаємо дію зі стору для додавання завдання
        const taskStore = useTaskStore();
        taskStore.addTask(newTask);

        // Очищаємо форму після додавання
        this.taskName = "";
        this.taskDescription = "";
        this.taskDeadline = "";

        // Перехід на головну сторінку після додавання завдання
        this.$router.push("/");
      } else {
        alert("Будь ласка, заповніть всі поля.");
      }
    },
  },
};
</script>
