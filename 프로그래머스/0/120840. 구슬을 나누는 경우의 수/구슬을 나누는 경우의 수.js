function solution(balls, share) {
    let fac1 = 1;
    let fac2 = 1;
    let fac3 = 1;
    
    for(let i = 1; i <= balls; i++) {
        fac1 *= i;
    }
    
    for(let i = 1; i <= balls-share; i++) {
        fac2 *= i;
    }
    
    for(let i = 1; i <= share; i++) {
        fac3 *= i;
    }
    
    return Math.round(fac1 / (fac2 * fac3));
}