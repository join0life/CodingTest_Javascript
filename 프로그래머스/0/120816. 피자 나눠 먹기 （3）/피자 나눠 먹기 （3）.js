function solution(slice, n) {
    for(let pizza = 1; pizza <= n; pizza++) {
        if(pizza * slice >= n)
            return pizza;
    }
}