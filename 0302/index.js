//  k번째 수

function solution(array, commands) {
    return commands.flatMap(a=>{
        return array.slice(a[0]-1,a[1]).sort((a,b)=>a-b).slice(a[2]-1,a[2]);
    });
  };