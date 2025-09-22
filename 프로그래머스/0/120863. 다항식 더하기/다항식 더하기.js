function solution(polynomial) {
    let arr = polynomial.split(" + "); // ["3x", "7", "x"]
    let xNum = 0; let num = 0;
    arr.forEach(v => {
        if (v.includes('x')) {
            let coef = v.replace('x', ''); // ["3", "7", ""]
            xNum += coef === '' ? 1 : parseInt(coef); 
        } else {
            num += parseInt(v);
        }
    })
    
    let result = [];
    if (xNum > 0) result.push(xNum === 1 ? 'x' : `${xNum}x`)
    if (num > 0) result.push(num) 
    
    return result.join(" + ")
}