function solution(n)
{
    return String(n).split('').map(v => Number(v)).reduce((acc, cur) => acc + cur, 0);
//     return String(n).split('').reduce((acc, cur) => Number(acc) + Number(cur));
    
    // return n.toString().split('').map(Number).reduce((acc, cur) => acc + cur, 0); 
}

