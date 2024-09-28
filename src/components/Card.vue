<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const { quiz } = defineProps(["quiz"]);

const router = useRouter();

const navigateToQuiz = () => router.push(`/quiz/${quiz.id}`);
</script>

<template>
  <div class="card col-4 py-2 d-flex justify-content-between">
    <img :src="quiz.img" :alt="quiz.name" class="card-img-top" />
    <h5 class="card-title">{{ quiz.name }}</h5>
    <p class="card-text">{{ quiz.questions.length }} questions</p>
    <button @click="navigateToQuiz" class="btn btn-primary">Go to quiz</button>
  </div>
</template>
