function solution(num_list, n) {
    const first = num_list.slice(n);
    const last = num_list.slice(0, n);
    
    return first.concat(last);
}