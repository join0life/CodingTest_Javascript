function solution(arr, n) {
    return arr.map((v, i) => {
        if (arr.length % 2 !== 0) {
            return i % 2 === 0 ? v + n : v;
        } else {
            return i % 2 !== 0 ? v + n : v;
        }
    })
}