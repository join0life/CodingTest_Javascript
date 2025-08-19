function solution(n, k) {
    let discount = Math.floor(n/10)
    return (n * 12000) + ((k * 2000) - (discount * 2000))
}