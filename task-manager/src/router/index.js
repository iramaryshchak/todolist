import { createRouter, createWebHistory } from "vue-router";
import TaskList from "@/components/TaskList.vue";
import TaskDetails from "@/components/TaskDetails.vue";
import AddTask from "@/components/AddTask.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: TaskList,
  },
  {
    path: "/task/:id", // маршрут для деталей завдання
    name: "TaskDetails",
    component: TaskDetails,
    props: true, // передаємо параметри як пропс
  },
  {
    path: "/add",
    name: "AddTask",
    component: AddTask,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
