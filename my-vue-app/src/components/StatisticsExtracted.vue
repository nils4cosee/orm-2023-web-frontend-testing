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
import {useStatistics} from "@/components/useStatistics.ts";

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

const {sum,median,mean} = useStatistics(numbers)
</script>
