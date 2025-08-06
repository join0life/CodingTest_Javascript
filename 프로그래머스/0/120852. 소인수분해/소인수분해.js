function solution(n) {
    let result = [];
    let i = 2;
    
    while (i <= n) {
        if (n % i === 0) {
            result.push(i);
            while (n % i === 0) {
                n /= i;
            }    
        }
        i++;
    }
    return result;
    
}