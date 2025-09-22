function solution(numbers) {
    let sortedNum = numbers.sort((a, b) => a - b);
    let front = sortedNum[0] * sortedNum[1];
    let back = sortedNum[sortedNum.length-1] * sortedNum[sortedNum.length-2];
    
    return front >= back ? front : back;
}