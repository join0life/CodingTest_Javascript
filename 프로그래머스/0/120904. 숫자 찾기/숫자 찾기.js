function solution(num, k) {
    let strNum = num.toString() // '29183'
    let strK = k.toString() // '1'
    let index = strNum.indexOf(strK) + 1; // 3
    
    return index ? index : -1 ;
}