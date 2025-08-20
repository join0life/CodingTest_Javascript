function solution(hp) {
    let general = Math.floor(hp / 5)
    hp = hp % 5;
    let soldier = Math.floor(hp / 3);
    hp = hp % 3;
    let worker = hp;
    
    return general + soldier + worker;
}