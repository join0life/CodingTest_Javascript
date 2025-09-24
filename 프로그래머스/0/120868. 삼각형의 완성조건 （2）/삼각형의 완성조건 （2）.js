function solution(sides) {
    let a = Math.max(...sides);
    let b = Math.min(...sides);
    let result = 0;
    
    for(let i = 1; i < a + b; i++) {
        let arr = [a, b, i].sort((a, b) => a - b)
        if (arr[0] + arr[1] > arr[2]) result++;
}
    return result;
}