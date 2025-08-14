function solution(money) {
    let result = [];
    
    let iceamericano = Math.floor(money / 5500);
    let charge = money - (iceamericano * 5500);
    
    result.push(iceamericano);
    result.push(charge);
    
    return result;
}