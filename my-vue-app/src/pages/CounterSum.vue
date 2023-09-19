<script setup lang="ts">
import Counter from "../components/Counter.vue";
import { ref } from "vue";
import { useStats } from "../composables/useStats.ts";
import { copyToClipboard } from "../browser/copyToClipboard.ts";

const counter1 = ref(0);
const counter2 = ref(0);
const { sum } = useStats({ values: [counter1, counter2] });

function copySumToClipboard() {
  copyToClipboard(String(sum.value));
}

</script>
<template>
  <div>
    <Counter label="One" v-model="counter1" />
  </div>
  <div>
    <Counter label="Counter" v-model="counter2" />
  </div>
  <div>
    Sum: {{ sum }}
    <button @click="copySumToClipboard">Copy to clipboard</button>
  </div>
</template>
