function solution(arr, queries) {
    const result = queries.map(([s,e,k]) => {
        let min = Infinity;
        for(let i = s; i <= e; i++) {
            // 배열의 어떤 숫자든 i < k를 만족시키는 첫 값은 무조건 arr[i] < min를 만족
            if(arr[i] > k && arr[i] < min) min = arr[i];
        }
        return min === Infinity? -1 : min;
    })
    return result;
}