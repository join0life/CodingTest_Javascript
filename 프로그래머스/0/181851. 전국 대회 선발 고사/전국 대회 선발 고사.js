function solution(rank, attendance) {
    const candidates = rank
    .map((r, i) => ({rank : r, index : i}))
    .filter(v => attendance[v.index])
    .sort((a, b) => a.rank - b.rank);
    
    const [a, b, c] = candidates.map(v => v.index).slice(0, 3);
    return 10000 * a + 100 * b + c;
}