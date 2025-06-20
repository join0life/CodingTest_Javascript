function solution(myString, pat) {
    let result = '';
    for (let v of myString) {
        if (v === 'A')
            result += 'B';
        else 
            result += 'A';
    }
    return result.includes(pat) ? 1 : 0;
}