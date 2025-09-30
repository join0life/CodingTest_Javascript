function solution(a, b) {
    //최대공약수 찾는 함수
    function gcd(x, y) {
        while(y) {
            [x, y] = [y, x % y];
        }
        return x;
    }
    const g = gcd(a, b); // 최대공약수 찾기
    b /= g; // 분모를 기약분수의 분모로 만들기
    while(b % 2 === 0) b /= 2;
    while(b % 5 === 0) b /= 5;
    return b === 1 ? 1 : 2;
    
}