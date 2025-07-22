function solution(n) {
    // n x n 배열 생성 + 요소를 0으로 초기화
    const result = Array.from({length : n}, () => Array(n).fill(0));
    
    const dx = [0, 1, 0, -1]; //행 이동(오른쪽: 0, 아래: 1, 왼쪽: 0, 위: -1)
    const dy = [1, 0, -1, 0]; // 열 이동(오른쪽: 1, 아래: 0, 왼쪽: -1, 위: 0)
    
    let x = 0, y = 0, dir = 0; // 시작 위치(x, y), 방향 인덱스(dir)
    
    // result에 1부터 n*n까지의 숫자 넣기
    for(let i = 1; i <= n * n; i++) {
        result[x][y] = i;
        
        // 다음 위치 계산
        const nx = x + dx[dir]
        const ny = y + dy[dir]
        
        // 방향 벗어나거나 자리에 숫자가 있을 때 -> 방향 전환
        if (nx < 0 || ny < 0 || nx >= n || ny >= n || result[nx][ny] !== 0) {
             dir = (dir + 1) % 4;
        }
        
        // 방향 이동
        x += dx[dir];
        y += dy[dir];
    }
    
return result;


    }
