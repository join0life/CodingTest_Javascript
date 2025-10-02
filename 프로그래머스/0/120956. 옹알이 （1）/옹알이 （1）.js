function solution(babbling) {
    const sounds = ["aya", "ye", "woo", "ma"];
    let result = 0;
    
    babbling.forEach(word => {
        for(let sound of sounds) {
            word = word.replace(sound, ' ');
        }
        if (word.trim() === '')
            result++;
    })
    
    return result;
}