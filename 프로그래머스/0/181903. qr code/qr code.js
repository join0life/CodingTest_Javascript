function solution(q, r, code) {
    // filter 쓰려면 문자열을 배열로 만들어야 함
    return [...code].filter((_,i) => i % q === r).join('');
}