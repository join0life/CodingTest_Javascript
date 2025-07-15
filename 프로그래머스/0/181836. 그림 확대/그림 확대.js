function solution(picture, k) {
    let result = [];
    
    for(let pic of picture) {
        // 가로 k배
        const row = [...pic].map(v => v.repeat(k)).join('');
        
        // 세로 k배
        for(let i = 0; i < k; i++) {
            result.push(row);
        }
    }
    return result;
    
}