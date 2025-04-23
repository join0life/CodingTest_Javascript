function solution(num_list) {
    const oddStr = num_list.filter(e => e % 2 !== 0).join('');
    const evenStr = num_list.filter(e => e % 2 === 0).join('');
    
    return Number(oddStr) + Number(evenStr);
}