function solution(arr, queries) {
    queries.forEach((query) => {
        const [i, j] = query;
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    })
    return arr;
}