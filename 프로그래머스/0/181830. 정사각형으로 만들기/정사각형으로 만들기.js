function solution(arr) {
    const row = arr.length;
    const column = arr[0].length;
    
    if(row > column) {
        for(let i = 0; i < row; i++) {
            for(let j = 0; j < row-column; j++)
                arr[i].push(0);
        }
    }
    
    if(row < column) {
        const newRow = Array(column).fill(0);
            
        for(let i = 0; i < column-row; i ++) {
            arr.push(newRow);
    }
}
    return arr;
}