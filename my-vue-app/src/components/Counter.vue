<script setup lang="ts">
const props = defineProps<{ label: string, modelValue: number }>();

const emit = defineEmits<{
  (event: "update:modelValue", value: number): void;
}>();
</script>

<template>
  <button @click="emit('update:modelValue', props.modelValue + 1)">{{label}} {{modelValue}}</button>
</template>
