function solution(quiz) {
    let arr = [];
    for(let i = 0; i < quiz.length; i++) {
        let splitQuiz = quiz[i].split(" "); // ["3", "-", "4", ...]
        let firNum = Number(splitQuiz[0]);
        let operator = splitQuiz[1];
        let secNum = Number(splitQuiz[2]);
        let result = Number(splitQuiz[4]);
        
        if (operator === '+') {
            firNum + secNum === result ? arr.push("O") : arr.push("X");
        } else if (operator === '-') {
            firNum - secNum === result ? arr.push("O") : arr.push("X");
        }   
    }
    
    
    
    return arr;
}