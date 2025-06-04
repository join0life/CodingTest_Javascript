function solution(num_list) {
    const found = num_list.findIndex((v, i) => v < 0);
    return found === -1 ? -1 : found ;
}