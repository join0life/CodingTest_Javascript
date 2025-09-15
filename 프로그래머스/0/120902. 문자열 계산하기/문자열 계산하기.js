function solution(my_string) {
    let myArr = my_string.split(' ');         // 공백 기준 분할 ["3", "+", "4"]
    let result = Number(myArr[0]);             // 첫 숫자를 초기값으로 설정

    for (let i = 1; i < myArr.length; i += 2) {
        const operator = myArr[i];             // 연산자
        const num = Number(myArr[i + 1]);      // 다음 숫자

        if (operator === '+') result += num;  // 덧셈
        else if (operator === '-') result -= num; // 뺄셈
    }

    return result;                             // 최종 결과 반환
}
