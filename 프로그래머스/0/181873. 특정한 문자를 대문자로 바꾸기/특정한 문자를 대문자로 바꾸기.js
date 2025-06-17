function solution(my_string, alp) {
    const new_string= [...my_string].map(v => {
        if ( v === alp ) return v.toUpperCase();
        else return v;
    })
    return new_string.join('');
}