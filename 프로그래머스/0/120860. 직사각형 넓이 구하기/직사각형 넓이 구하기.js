function solution(dots) {
    let arrayX = dots.map((v) => v[0]);
    let arrayY = dots.map((v) => v[1]);
    
    return (Math.max(...arrayX) - Math.min(...arrayX)) * (Math.max(...arrayY) - Math.min(...arrayY))
} 