<script setup lang="ts">
import Counter from "../components/Counter.vue";
import { ref } from "vue";
import { useStats } from "../composables/useStats.ts";

const counter1 = ref(0);
const counter2 = ref(0);
const { sum } = useStats({ values: [counter1, counter2] });
</script>
<template>
  <div>
    <Counter label="One" v-model="counter1" />
  </div>
  <div>
    <Counter label="Two" v-model="counter2" />
  </div>
  <div>Sum: {{ sum }}</div>
</template>
