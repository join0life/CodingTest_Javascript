function solution(n) {
    let result = 0;
    let i = 0;
    
    while(i < n) {
        result++;
        if(result % 3 === 0 || result.toString().includes('3'))
            continue;
        
        i++;
    }
    return result;
}