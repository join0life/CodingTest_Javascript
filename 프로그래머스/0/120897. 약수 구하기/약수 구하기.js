function solution(n) {
//     let result = [];
    
//     for(let i = 1; i <= n; i++) {
//         if (n % i === 0) result.push(i);
//     }
    
//     return result;
    return Array(n).fill(0).map((v, i) => v+i+1).filter(v => n % v === 0);
}