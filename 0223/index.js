const reducer = (result, currentValue) => currentValue.map((_, i) => [
    ...result[i] || [],
    currentValue[i]
].filter((el) => el !== 0));

const solution = (board, moves) => {
    const stacks = board.reduce(reducer, []);
    const basket = [];
    let result = 0;
    for (const i of moves) {
        const temp = stacks[i - 1].shift();
        if (!temp) 
            continue;
        if (temp === basket[basket.length - 1]) {
            basket.pop();
            result += 2;
            continue;
        }
        basket.push(temp);
    }
    return result;
}


// reducer 활용 (1)

const myarr = [-1,5,2,4,3,1,5,6,7,8,9,9,9,10];

const sumReducer = (result,currentValue) => result+=currentValue;
const maxReducer = (result,currentValue) => result<currentValue ? currentValue : result;
const minReducer = (result,currentValue) => result>currentValue ? currentValue: result;

console.log(myarr.reduce(sumReducer));
console.log(myarr.reduce(maxReducer));
console.log(myarr.reduce(minReducer));





// reducer 활용 (2)

const userInput = "AAAAbbbbCCCCddddEEEE".split('');

const reducer = (result,currentValue) => {
    if(currentValue===currentValue.toUpperCase()){
        result +=currentValue.toLowerCase();
    }else{
        result +=currentValue.toUpperCase();
    }
    return result;
}

userInput.reduce(reducer,"");




// reducer 활용 (3)

const userInput = ["97", "86", "75", "66", "55", "97", "85", "97", "97", "95"];
const counts = userInput.reduce((a,b)=>{

    a[b] = a[b] ? ++a[b]: 1;
    
    return a;
    
    }, {});
    
    const candidates =Object.keys(counts)
    
    .sort((a,b)=>b-a).slice(0,3);
    
    const results = candidates.reduce((a,b)=>{
    
    a+=counts[b];
    
    return a;
    
    },0);







    
// reducer 활용 (4)

const matrix = [["영","한","영","한","영","한"],["영","한","영","한","영","한"],["영","한","영","한","영","한"],["영","한","영","한","영","한"],["영","한","영","한","영","한"]]
const reducer = (result,currentValue) => currentValue.map((data,index)=>[...result[index] || [],currentValue[index]]);
console.log(matrix.reduce(reducer,[]));


