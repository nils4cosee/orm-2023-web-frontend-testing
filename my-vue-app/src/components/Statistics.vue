<template>
  <input placeholder="value 1" type="text" v-model="value1" />
  <input placeholder="value 2" type="text" v-model="value2" />
  <input placeholder="value 3" type="text" v-model="value3" />
  <input placeholder="value 4" type="text" v-model="value4" />
  <input placeholder="value 5" type="text" v-model="value5" />
  <p>Sum: {{ sum }}</p>
  <p>Mean: {{ mean }}</p>
  <p>Median: {{ median }}</p>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";

const value1 = ref<string>("");
const value2 = ref<string>("");
const value3 = ref<string>("");
const value4 = ref<string>("");
const value5 = ref<string>("");

const numbers = computed(() => {
  return [value1, value2, value3, value4, value5].map((str) =>
    parseInt(str.value),
  );
});

const sum = computed(() => {
  let sum = 0;
  for (const value of numbers.value) {
    sum += value;
  }
  return sum;
});

const median = computed(() => {
  return numbers.value[Math.floor(numbers.value.length / 2)];
});

const mean = computed(() => {
  return sum.value / numbers.value.length;
});
</script>
