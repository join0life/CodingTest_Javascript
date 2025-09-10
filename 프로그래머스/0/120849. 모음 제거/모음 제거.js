function solution(my_string) {
    const vowel = 'aeiou';
    
    return [...my_string].filter(v => !vowel.includes(v)).join('');
}