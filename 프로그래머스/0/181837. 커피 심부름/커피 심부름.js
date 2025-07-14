function solution(order) {
    let total = 0;
    
    for(let menu of order) {
        if (menu === 'anything') menu = 'iceamericano';
        
        if (menu.includes('americano')) {
            total += 4500;
        } else if (menu.includes('latte')) {
            total += 5000;
        }
        
    }
    return total;
}