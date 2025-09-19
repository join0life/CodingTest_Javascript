function solution(keyinput, board) {  
    const xLimit = (board[0] - 1) / 2; // 11 -> 5
    const yLimit = (board[1] - 1) / 2; // 11 -> 5
    
    let x = 0, y = 0;
    
    keyinput.forEach(v => {
        if (v === "left" && -xLimit < x) x--;  
        else if (v === "right" && xLimit > x) x++;
        else if (v === "up" && yLimit > y) y++;
        else if (v === "down" && -yLimit < y) y--;
    })
    
    return [x, y];
}