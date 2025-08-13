function solution(n) {    
    for (let pizza = 1; pizza <= n; pizza++) {
        if(7 * pizza >= n)
            return pizza;
    }
}