function solution(numLog) {
    let result = '';
    
    for(let i=1; i<=numLog.length; i++) {
        if(numLog[i] - numLog[i-1] == 1) result += 'w';
        if(numLog[i] - numLog[i-1] == -1) result += 's';
        if(numLog[i] - numLog[i-1] == 10) result += 'd';
        if(numLog[i] - numLog[i-1] == -10) result += 'a';
}
 return result;   
}