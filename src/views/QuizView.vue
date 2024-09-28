<script setup>
import Question from "@/components/Question.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import Results from "@/components/Results.vue";
import { computed, ref, watch } from "vue";
import { useRoute } from "vue-router";
import quizes from "../data/quizes.json";

const route = useRoute();

const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);

const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResults = ref(false);

const questionStatus = computed(
  () => (questionStatus.value = `${currentQuestionIndex.value}/${quiz.questions.length}`)
);
const barPercentage = computed(
  () => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
);

const onOptionSelected = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }

  if (quiz.questions.length - 1 === currentQuestionIndex.value) {
    showResults.value = true;
  }

  currentQuestionIndex.value++;
};
</script>

<template>
  <div class="container">
    <QuizHeader
      :quizName="quiz.name"
      :questionStatus="questionStatus"
      :barPercentage="barPercentage" />

    <Question
      v-if="!showResults"
      :question="quiz.questions[currentQuestionIndex]"
      @selectOption="onOptionSelected" />

    <Results
      v-else
      :numberOfCorrectAnswers="numberOfCorrectAnswers"
      :numberOfQuestions="quiz.questions.length" />
  </div>
</template>
