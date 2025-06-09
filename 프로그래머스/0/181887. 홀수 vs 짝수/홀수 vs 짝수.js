function solution(num_list) {
    
    let evenSum = num_list.reduce((acc, v, i) => i % 2 !== 0 ? acc+v : acc, 0);
    let oddSum = num_list.reduce((acc, v, i) => i % 2 === 0 ? acc+v : acc, 0);
    
    return evenSum > oddSum ? evenSum : oddSum;
}