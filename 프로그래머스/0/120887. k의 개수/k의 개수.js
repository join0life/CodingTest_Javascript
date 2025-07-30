function solution(i, j, k) {
    let result = 0;
    let target = k.toString();
    
    for(let z = i; z <= j; z++) {
        z = z.toString();
        for(let str of z) {
            if(str === target) result ++
        }
    }
    
    return result;
}