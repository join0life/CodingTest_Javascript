function solution(lines) {
    let arr = new Array(201).fill(0) // -100 ~ 100
    
    lines.forEach(([start, end]) => {
        for(let i = start; i < end; i++) {
            arr[i+100]++;
        }
    })
    
    return arr.filter(v => v > 1).length;
}