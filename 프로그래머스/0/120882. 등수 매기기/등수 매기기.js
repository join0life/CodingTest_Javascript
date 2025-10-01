function solution(score) {
    const avg = score.map(([eng, mat]) => (eng + mat) / 2);
    const sortedAvg = avg.slice().sort((a, b) => b - a);
    return avg.map(v => sortedAvg.indexOf(v) + 1);
}