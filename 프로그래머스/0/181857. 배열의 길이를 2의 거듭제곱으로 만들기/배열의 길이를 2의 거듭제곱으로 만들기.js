function solution(arr) {
    let i = 1;
    
    while(i < arr.length) {
        i *= 2;
    }
    
    const zerosToAdd = i - arr.length;
    return arr.concat(Array(zerosToAdd).fill(0));
}