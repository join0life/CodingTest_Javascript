function solution(array, n) {
    return array.reduce((a, b) => {
        const diffA = Math.abs(a-n); // 누적값 a
        const diffB = Math.abs(b-n); // 현재값 b
        
        if (diffA === diffB) {
            return a < b ? a : b;
        }
        
        return diffA < diffB ? a:b;
    })
}