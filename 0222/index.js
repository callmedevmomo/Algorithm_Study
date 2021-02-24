
// let arr=[2,1,3,4,1];
// let arr= [5,0,2,7];
let arr= [];
for (let i = 1000; i > 0; i--) {
    arr.push(i);
}



// 이중 for문
function solution(numbers) {
    let startTime = new Date().getTime();
    let answer = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (!answer.includes(numbers[i] + numbers[j])) {
                answer.push(numbers[i] + numbers[j]);
            }
        }
    }
    answer.sort((a, b) => a - b);
    let endTime = new Date().getTime();
    console.log(endTime - startTime);
    return answer;
}







// Set Object 사용
function solution2(numbers) {
    let startTime = new Date().getTime();
    let answer = [];
    let temp;
    while (numbers.length >= 2) {
        temp = numbers.shift();
        numbers.forEach((data) => answer.push(data + temp));
        // for ( let i in numbers){
        //     answer.push(numbers[i]+temp);
        // }
    }

    answer.sort((a, b) => a - b);

    answer = new Set(answer);
    let endTime = new Date().getTime();
    console.log(endTime - startTime);
    // [...new Set(answer)]
    return [...answer];
}





// 이중 for문 & Set 사용
function solution3(numbers) {
    let startTime = new Date().getTime();
    const temp = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }
    const answer = [...new Set(temp)]
    let result = answer.sort((a, b) => a - b);
    let endTime = new Date().getTime();
    console.log(endTime - startTime);
    return result;
}






function solution4(numbers) {
    let startTime = new Date().getTime();
    var answer = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (answer.indexOf(numbers[i] + numbers[j]) === -1) {
                answer.push(numbers[i] + numbers[j])
            }
        }
    }
    let endTime = new Date().getTime();
    let result = answer.sort((a, b) => a - b);
    console.log(endTime - startTime);
    return result;
}




function solution5(numbers) {
    let startTime = new Date().getTime();
    let answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i === j) 
                continue; // 동일한 index는 skip
            answer.push(numbers[i] + numbers[j])
        }
    }
    answer = [...new Set(answer)].sort((a, b) => a - b)
    let endTime = new Date().getTime();
    console.log(endTime - startTime);
    return answer;
}


// Set & Add

function solution6(numbers) {
    let startTime = new Date().getTime();
    const sorted_numbers = numbers.sort((a, b) => a - b);
    const answer_set = new Set([]);
    for (let i = 0; i < sorted_numbers.length; i += 1) {
        if (i == 0) {
            for (let j = i + 1; j < sorted_numbers.length; j += 1) {
                answer_set.add(sorted_numbers[i] + sorted_numbers[j]);
            }
        } else if (sorted_numbers[i] !== sorted_numbers[i - 1]) {
            for (let j = i + 1; j < sorted_numbers.length; j += 1) {
                answer_set.add(sorted_numbers[i] + sorted_numbers[j]);
            }
        }
    }

    let result = Array
        .from(answer_set)
        .sort((a, b) => a - b);
    let endTime = new Date().getTime();
    console.log(endTime - startTime);
    return result;
}












console.log("시간 측정"); 
console.log(solution6(arr)); 



// console.log(solution(arr)); 
// console.log(solution2(arr)); 
// console.log(solution3(arr)); 
// console.log(solution4(arr));  511ms
// console.log(solution5(arr)); 44ms