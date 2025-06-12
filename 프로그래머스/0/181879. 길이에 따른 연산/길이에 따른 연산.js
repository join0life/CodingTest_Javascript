function solution(num_list) {
    const sum = num_list.reduce((acc, v) => acc + v, 0)
    const multi = num_list.reduce((acc, v) => acc * v, 1)
    
    if(num_list.length >= 11) {
        return sum;
    } else {
        return multi;
    }
}