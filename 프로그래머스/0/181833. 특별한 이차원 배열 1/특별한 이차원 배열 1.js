function solution(n) {
    const arr = [];
    for(let i = 0; i < n; i++) {
        const row = []; // n의 개수만큼 row 만들기
        for(let j = 0; j < n; j++) {
            row.push(i===j? 1 : 0);
        }
    arr.push(row);
        
    }
return arr;    
}
