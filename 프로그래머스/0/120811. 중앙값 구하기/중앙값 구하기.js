function solution(array) {
    let median = (array.length-1)/2;
    
    array = array.sort((a, b) => a - b);
    
    for(let i = 0; i < array.length; i++) {
        if(i === median) return array[i];
    }
}