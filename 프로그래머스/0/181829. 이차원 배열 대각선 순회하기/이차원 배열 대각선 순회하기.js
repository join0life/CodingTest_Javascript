function solution(board, k) {
    let result = [];
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if (i + j <= k) {
                result.push(board[i][j]);
            }
        }
    }
    return result.reduce((acc, cur) => acc + cur);
}