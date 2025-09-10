function solution(my_string) {
    return [...my_string].filter(v => v == Number(v)).sort((a, b) => a - b).map(Number);
}