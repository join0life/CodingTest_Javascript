function solution(age) {
    const alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z'];
    
    let ageArr = age.toString().split('');
    return ageArr.map((v) => alfabet[v]).join('');
}