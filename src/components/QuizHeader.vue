<script setup>
const { quizName, questionStatus, barPercentage } = defineProps([
  "quizName",
  "questionStatus",
  "barPercentage",
]);
</script>
<template>
  <header>
    <h4>{{ quizName }} {{ questionStatus }}</h4>
    <div class="bar my-3">
      <div class="completion" :style="{ width: barPercentage }"></div>
    </div>
  </header>
</template>

<style scoped>
.bar {
  width: 300px;
  height: 50px;
  border: 3px solid bisque;
}
.completion {
  height: 100%;
  width: 0%;
  background-color: bisque;
}
</style>
