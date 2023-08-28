import { computed, Ref } from "vue";
import { sum } from "../utils/sum";

interface UseStatsArgs {
  values: Ref<number>[];
}

interface UseStatsReturn {
  sum: Ref<number>;
}

export function useStats({ values }: UseStatsArgs): UseStatsReturn {
  return {
    sum: computed(() => sum(values.map((value) => value.value))),
  };
}
