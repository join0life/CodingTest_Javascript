function solution(board) {
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1] // 위아래 방향
    const dy = [-1, 0, 1, -1, 1, -1 , 0, 1] // 양옆 방향
    
    // board 복사
    const n = board.length;
    const danger = Array.from({length: n}, (_, i) => board[i].slice());
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                // 위험 지역 8번
                for(let k = 0; k < 8; k++) {
                    const ni = i + dx[k];
                    const nj = j + dy[k];
                    // 위험 지역 다 1로 바꾸기
                    if (ni >= 0 && ni < n && nj >= 0 && nj < n)
                        danger[ni][nj] = 1;
                }
            }
        }
    }
    // 안전한 지대(0)의 개수 세기 
    let result = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(danger[i][j] === 0) result++;
        }
    }
    
    return result;
}