function solution(price) {
    if (price >= 500000) {
        price = Math.floor(price * 0.80);
    } else if (price >= 300000) {
        price = Math.floor(price * 0.90);
    } else if (price >= 100000) {
        price = Math.floor(price * 0.95);
    }
    
    return price;
}