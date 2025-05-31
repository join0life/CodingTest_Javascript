function solution(my_string, m, c) {
    let result = [];
    for(let i = 0; i < my_string.length; i += m) {
        result.push(my_string.slice(i, i+m));
    }
    
    return result.map(str => str[c-1]).join('');
}