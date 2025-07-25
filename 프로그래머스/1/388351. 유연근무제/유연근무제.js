function solution(schedules, timelogs, startday) {
    let count = 0;
    
    function formatTime(time) {
        let hour = Math.floor(time / 100);
        let min = time % 100;
        
        min += 10;
        if (min >= 60) {
            hour += 1;
            min -= 60;
        }
        return hour * 100 + min;
        
    }
    
    for(let i = 0; i < schedules.length; i++) {
        let success = true;
        for(let j = 0; j < 7; j++) {
            const day = (startday + j - 1) % 7;
            
            if(day === 5 || day === 6) continue;
            
            const real = timelogs[i][j];
            const goal = formatTime(schedules[i]);
            
            if (real > goal) {
                success = false;
                break;
            }          
        }
        if(success) count++;
        
    }
    return count;
}