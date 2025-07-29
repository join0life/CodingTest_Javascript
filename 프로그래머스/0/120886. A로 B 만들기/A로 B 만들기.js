function solution(before, after) {
    // reverse하는 게 아니라 정렬해서 두 문자열 비교
    const sortB = before.split('').sort().join('');
    const sortA = after.split('').sort().join('');
    
    return sortB === sortA ? 1 : 0;
}