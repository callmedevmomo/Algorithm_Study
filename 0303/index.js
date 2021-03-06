// 2016년
function solution(a, b) {
    let result;
    let days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    result = days[new Date(`${a} ${b}, 2016`).getDay()];
    return result;
}