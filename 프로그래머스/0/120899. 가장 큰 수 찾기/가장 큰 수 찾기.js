function solution(array) {
    let result = [];
    
    let maxValue = Math.max(...array);
    let index = array.indexOf(maxValue);
    
    result.push(maxValue);
    result.push(index);
    
    return result;
}