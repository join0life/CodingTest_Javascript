function solution(my_strings, parts) {
    return my_strings.map((str, i) => {
        const [s, e] = parts[i];
        return str.substr(s, e-s+1);
    }).join('');
}