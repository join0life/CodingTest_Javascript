function solution(l, r) {
    const result = []; // 결과값 저장
    const queue = ['5']; // 숫자 생성을 시작할 시드 값
    
    while (queue.length) {
        const numStr = queue.shift(); //배열의 첫 번째 요소를 제거하고 그 값을 반환
        const num = Number(numStr);
        if(num > r) continue; // r을 넘으면 더 이상 큐에 추가하지 않음
        if(num >= l) result.push(num); // 배열의 끝에 num 추가
        
        // BFS(너비 우선 탐색)
        queue.push(numStr + '0');
        queue.push(numStr + '5');
    }
    return result.length ? result.sort((a,b) => a - b) : [-1];
}