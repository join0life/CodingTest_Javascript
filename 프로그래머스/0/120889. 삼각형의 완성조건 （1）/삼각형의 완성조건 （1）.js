function solution(sides) {
    let sortedSides = sides.sort();
    
    return sortedSides[2] < sortedSides[0] + sortedSides[1] ? 1 : 2; 
    
}