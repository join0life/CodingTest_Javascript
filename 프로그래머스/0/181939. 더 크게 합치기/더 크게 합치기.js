function solution(a, b) {
    let aPlusB = String(a) + String(b);
    let bPlusA = String(b) + String(a);
    
    return Number(aPlusB) >= Number(bPlusA) ? Number(aPlusB) : Number(bPlusA);
}

console.log(solution(9, 91));
console.log(solution(89, 8));
