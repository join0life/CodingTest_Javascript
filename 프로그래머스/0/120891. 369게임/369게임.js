function solution(order) {
    let count = 0;
    
    order = order.toString();
    
    for (let v of order) {
        if (v.includes('3') || v.includes('6') || v.includes('9'))
            count++;
            
    }

    return count;
}