function solution(my_string) {
    // 문자는 모두 공백으로 치환
    const numbers = my_string
                    .replace(/[^0-9]/g, ' ')
                    .split(' ')
                    .filter(v => v != ' ');
    return numbers.map(Number).reduce((acc, cur) => acc + cur, 0);
}