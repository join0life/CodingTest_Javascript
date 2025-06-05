function solution(arr, query) {
    const result = query.map((v, i) => {
        if (i % 2 === 0) { // i가 짝수일 때
            return arr.splice(v+1, arr.length);
        } else { // i가 홀수일 때
            return arr.splice(0, v);
        }
    })
    return arr;
}