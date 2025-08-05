function solution(array) {
    let cnt = 0;
    let letter = '';
    
    for(let v of array) {
        letter += v;
    }
    
    for(let l of letter) {
        if(l==='7')
            cnt ++;
    }
    
    return cnt;
}