function solution(arr, intervals) {
    const [a1, b1] = intervals[0];
    const [a2, b2] = intervals[1];
    
    const fir = arr.slice(a1, b1 + 1);
    const sec = arr.slice(a2, b2 + 1);
    
    return fir.concat(sec);
}