<script setup>
import Card from "../components/Card.vue";
import { ref, watch } from "vue";
import q from "../data/quizes.json";

const quizes = ref(q);
const search = ref("");

watch(search, () => {
  quizes.value = q.filter((quiz) => quiz.name.toLowerCase().includes(search.value.toLowerCase()));
});
</script>

<template>
  <div>
    <h1>Quizes</h1>
    <input v-model.trim="search" type="text" class="form-control" placeholder="Search..." />

    <div class="row mt-2">
      <Card v-for="(quiz, index) in quizes" :key="index" :quiz="quiz" />
    </div>
  </div>
</template>
