// 눈 여겨볼 풀이
var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1));

function solution(participant, completion) {
    var answer = '';
     participant = participant.sort();
     completion = completion.sort();
    for ( let i =0; i<participant.length; i++){
        if(participant[i]!==completion[i]){
            answer = participant[i];
            break;
        }
    }
    return answer;
}