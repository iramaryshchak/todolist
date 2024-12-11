<template>
  <div class="container mt-5">
    <h2>Список завдань</h2>

    <!-- Кнопка для переходу до сторінки додавання завдання -->
    <router-link to="/add" class="btn btn-primary mb-3"
      >Додати нове завдання</router-link
    >

    <!-- Фільтри -->
    <div class="mb-3">
      <button
        @click="filterTasks('all')"
        :class="['btn', 'btn-secondary', 'me-2', { active: filter === 'all' }]"
      >
        Усі
      </button>
      <button
        @click="filterTasks('active')"
        :class="[
          'btn',
          'btn-secondary',
          'me-2',
          { active: filter === 'active' },
        ]"
      >
        Активні
      </button>
      <button
        @click="filterTasks('completed')"
        :class="['btn', 'btn-secondary', { active: filter === 'completed' }]"
      >
        Виконані
      </button>
    </div>

    <!-- Список завдань -->
    <ul class="list-group">
      <li
        v-for="task in filteredTasks"
        :key="task.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <router-link :to="`/task/${task.id}`" class="task-link">
          <span :class="{ 'text-decoration-line-through': task.completed }">{{
            task.name
          }}</span>
        </router-link>
        <div>
          <span class="badge bg-info">{{ task.deadline }}</span>
          <button
            @click="toggleTaskStatus(task.id)"
            class="btn btn-sm ms-2"
            :class="task.completed ? 'btn-warning' : 'btn-success'"
          >
            {{ task.completed ? "Відновити" : "Завершити" }}
          </button>
          <button
            @click="deleteTask(task.id)"
            class="btn btn-sm btn-danger ms-2"
          >
            Видалити
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTaskStore } from "@/stores/taskStore"; // імпортуємо стор для завдань

export default {
  computed: {
    tasks() {
      const taskStore = useTaskStore();
      return taskStore.tasks;
    },
    filteredTasks() {
      if (this.filter === "active") {
        return this.tasks.filter((task) => !task.completed);
      } else if (this.filter === "completed") {
        return this.tasks.filter((task) => task.completed);
      }
      return this.tasks; // Всі завдання
    },
  },
  data() {
    return {
      filter: "all",
    };
  },
  methods: {
    toggleTaskStatus(id) {
      const taskStore = useTaskStore();
      taskStore.toggleTaskStatus(id);
    },
    deleteTask(id) {
      const taskStore = useTaskStore();
      taskStore.deleteTask(id);
    },
    filterTasks(status) {
      this.filter = status;
    },
  },
};
</script>

<style scoped>
/* Додаткові стилі для кнопок фільтрації */
button.active {
  background-color: #007bff;
  color: white;
}

/* Стиль для клікабельних елементів */
.task-link {
  text-decoration: none;
  color: inherit;
}
</style>
