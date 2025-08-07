function solution(str1, str2) {
    let strSplit1 = str1.split('') // 'a', 'a' 'a', 'a'
    let strSplit2 = str2.split('') // 'b', 'b', 'b', 'b'
    let result = [];
    
    for(let i = 0; i < str1.length; i++) {
        result.push(strSplit1[i]);
        result.push(strSplit2[i]);
    }
    
    return result.join('');
}