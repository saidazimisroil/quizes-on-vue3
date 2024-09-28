<script setup>
const { question } = defineProps(["question"]);

const emit = defineEmits(["selectOption"]);

const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect);
};
</script>

<template>
  <h1>{{ question.text }}</h1>

  <div class="d-grid col-8">
    <p
      v-for="(option, index) in question.options"
      :key="index"
      @click="emitSelectedOption(option.isCorrect)"
      class="btn btn-outline-primary d-flex gap-5">
      <b>{{ option.label }}</b> {{ option.text }}
    </p>
  </div>
</template>
