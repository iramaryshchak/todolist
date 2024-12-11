<!-- src/views/TaskDetail.vue -->
<template>
  <div class="container mt-5">
    <h2>Деталі завдання</h2>

    <div v-if="task">
      <h3>{{ task.name }}</h3>
      <p>{{ task.description }}</p>
      <p><strong>Дедлайн: </strong>{{ task.deadline }}</p>
      <p>
        Статус: <strong>{{ task.completed ? "Виконано" : "Активне" }}</strong>
      </p>
      <router-link to="/" class="btn btn-primary">Назад до списку</router-link>
    </div>
    <div v-else>
      <p>Завдання не знайдено.</p>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "@/stores/taskStore"; // імпортуємо стор для завдань
import { useRoute } from "vue-router";

export default {
  computed: {
    task() {
      const taskStore = useTaskStore();
      const route = useRoute();
      return taskStore.tasks.find(
        (task) => task.id === parseInt(route.params.id)
      );
    },
  },
};
</script>

<style scoped>
/* Додаткові стилі для сторінки деталей */
</style>
