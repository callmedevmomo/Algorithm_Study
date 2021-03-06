// 가운데 글자 가져오기

function solution(s) {
    return [...s]
        .filter((data, index) => {
            let temp = parseInt(s.length / 2, 10);;
            if (s.length % 2 === 0) {
                if (parseInt(index, 10) === (temp - 1) || parseInt(index, 10) === temp) {
                    return true;
                }
            } else {
                if (parseInt(index, 10) === temp) {
                    return true;
                }
            }
        })
        .join('');
}