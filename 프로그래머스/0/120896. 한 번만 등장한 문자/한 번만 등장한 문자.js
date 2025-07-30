function solution(s) {
    // 문자 등장 횟수 -> 객체 생성
    let result = {};
    
    for(let str of s){
        result[str] = (result[str] || 0) + 1;
    }
    
    const uniqueChar = Object.keys(result).filter(v => result[v] === 1);
    
    return uniqueChar.sort().join('');
    
}