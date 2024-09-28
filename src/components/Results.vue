<script setup>
const { numberOfCorrectAnswers, numberOfQuestions } = defineProps([
  "numberOfCorrectAnswers",
  "numberOfQuestions",
]);
</script>
<template>
  <div class="d-grid py-5">
    <h5 class="mx-auto">Your results</h5>
    <h1 class="mx-auto">{{ numberOfCorrectAnswers }}/{{ numberOfQuestions }}</h1>
    <router-link to="/" class="my-3 mx-auto btn btn-sm btn-outline-secondary"
      ><- Go back</router-link
    >
  </div>
</template>
