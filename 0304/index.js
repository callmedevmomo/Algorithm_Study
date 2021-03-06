//  3진법 뒤집기

let result="";
function solution(n) {
let temp = parseInt(n/3,10);
if(temp<=2){
 result = result +  String(parseInt(n%3,10)) + temp;
   if(parseInt(result,10)===10){
    return 1;
   }
 result = result.split('').map((data,index)=>parseInt((data),10)*Math.pow(3,result.length-index- 1)).reduce((a,b)=>a+=b);
 return result; 
  }
result = result + String(parseInt(n%3,10));
return solution(temp);    
}

const solution2 = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}