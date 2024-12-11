<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <input
      type="checkbox"
      :checked="task.completed"
      @change="toggleStatus"
      class="form-check-input"
    />
    <strong>{{ task.title }}</strong>
    <span class="badge bg-secondary">{{ task.deadline }}</span>
    <button @click="deleteTask" class="btn btn-danger btn-sm">Видалити</button>
    <router-link :to="'/task/' + task.id" class="btn btn-info btn-sm"
      >Переглянути деталі</router-link
    >
  </li>
</template>
