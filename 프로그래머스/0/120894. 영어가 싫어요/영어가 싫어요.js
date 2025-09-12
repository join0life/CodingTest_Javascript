function solution(numbers) {
    const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    num.forEach((v, i) => numbers = numbers.replaceAll(v, i));
    
    return Number(numbers);
}