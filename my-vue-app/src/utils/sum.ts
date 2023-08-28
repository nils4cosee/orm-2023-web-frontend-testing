export function sum(values: number[]): number {
    let result = 0;
    for (let i = 0; i < values.length; i++) {
        result += values[i];
    }
    return result;
}
