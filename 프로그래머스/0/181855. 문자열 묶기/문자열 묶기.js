function solution(strArr) {
    let map = {};
    
    for (let str of strArr) {
        const len = str.length;
        map[len] = (map[len] || 0) + 1;
    }
    
    return Math.max(...Object.values(map));
}