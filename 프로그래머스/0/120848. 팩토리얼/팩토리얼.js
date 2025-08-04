function solution(n) {
    let i = 1;
    let result = 1;
    
    while(result * (i + 1) <= n) {
        i++;
        result *= i;
    }
    
    return i;
}