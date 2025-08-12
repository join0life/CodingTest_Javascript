function solution(array) {
    let count = {};
    
    for(let v of array) {
        count[v] = (count[v] || 0) + 1;
    }
    
    // 가장 큰 count -> value에 접근
    let maxCount = Math.max(...Object.values(count));
    
    // 최빈값 -> key에 접근
    let mode = Object.keys(count).filter(key => count[key] === maxCount);
    
    return mode.length > 1 ? -1 : Number(mode[0]);
    
}