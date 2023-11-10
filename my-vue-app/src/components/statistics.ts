
export function computeSum(numbers: number[]): number {
    let sum = 0;
    for (const value of numbers) {
        sum += value;
    }
    return sum;
}

export function computeMedian(numbers: number[]): number {
    return numbers[Math.floor(numbers.length / 2)];
}

export function computeMean(numbers: number[]): number {
    return computeSum(numbers) / numbers.length
}