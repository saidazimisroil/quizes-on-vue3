import QuizesView from "@/views/QuizesView.vue";
import QuizView from "@/views/QuizView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "quizes",
    component: QuizesView,
  },
  {
    path: "/quiz/:id",
    name: "quiz",
    component: QuizView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
