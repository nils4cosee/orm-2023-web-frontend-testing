import {computed, Ref} from "vue";


interface UseStatisticsReturn {
    sum: Ref<number>
    mean: Ref<number>
    median: Ref<number>
}

export function useStatistics(numbers: Ref<number[]>): UseStatisticsReturn {
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

    return { sum, mean, median}
}