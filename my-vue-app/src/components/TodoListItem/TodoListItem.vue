<script lang="ts" setup>
  import {Todo} from "@/model/Todo.ts";

  defineProps<{ modelValue: Todo }>()

  defineEmits<{
    (event: "update:modelValue", todo: Todo): void
  }>()
</script>
<template>
  <div>

  </div>
</template>