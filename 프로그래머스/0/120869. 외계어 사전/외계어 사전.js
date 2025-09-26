function solution(spell, dic) {
    const sortedSpell = spell.sort().join(""); 
    
    for (let v of dic) {
        const sortedV = v.split("").sort().join("");
        if (sortedSpell === sortedV) {
            return 1;
        } 
    } return 2;
}