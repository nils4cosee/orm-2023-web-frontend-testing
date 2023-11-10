import { computed, Ref } from "vue";
import {
  computeMean,
  computeMedian,
  computeSum,
} from "@/components/statistics.ts";

interface UseStatisticsReturn {
  sum: Ref<number>;
  mean: Ref<number>;
  median: Ref<number>;
}

export function useStatistics(numbers: Ref<number[]>): UseStatisticsReturn {
  const sum = computed(() => computeSum(numbers.value));

  const median = computed(() => computeMedian(numbers.value));

  const mean = computed(() => computeMean(numbers.value));

  return { sum, mean, median };
}
