function solution(s) {
    let stack = [];
    let tokens = s.split(' ');
    
    tokens.forEach(token => {
        if (token === 'Z') {
            stack.pop();
        } else {
            stack.push(Number(token));
        }
    })
    return stack.reduce((acc, cur) => acc+cur, 0);
    

}