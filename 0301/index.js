// 체육복
function solution(n, lost, reserve) {
    let result;
    let distinct_lost = lost.filter((data)=> !reserve.includes(data));
    let distinct_reserve = reserve.filter((data)=>!lost.includes(data));
    result = n - distinct_lost.filter((lost_el)=>{
    let temp = distinct_reserve.find((reserve_el)=> Math.abs(lost_el-reserve_el)<=1);
    if(!temp){
        return true;
    }
    distinct_reserve = distinct_reserve.filter((reserve_el)=> reserve_el !== temp);
    }).length;
    return result;
    }