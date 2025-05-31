function solution(my_string) {
    // 길이 52인 배열 생성 + 0으로 채우기 
    const result = Array(52).fill(0);
    
    for (let ch of my_string) {
        const code = ch.charCodeAt(0); // 아스키 코드
        
        // 'A'(65) ~ 'Z'(90)
        if (code >= 65 && code <= 90) result[code-65]++;
        // 'a'(97) ~ 'z'(122)
        else if (code >= 97 && code <= 122) result[26+(code-97)]++;
    }
    return result;
}