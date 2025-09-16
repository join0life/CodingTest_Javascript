function solution(n) {
    let strN = n.toString(); // '1234'
    
    return [...strN].reduce((acc, cur) => acc = acc + Number(cur), 0);
}