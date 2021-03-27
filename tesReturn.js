const number1 = 103;
const number2 = 72;
const number3 = 189;

const  getMax = (number1, number2, number3) => {
    let max = number1
    
    if (number2 > max){
        max = number2;
    }
    if (number3 > max){
        max = number3;
    }
    return max;
}
const max = getMax(number1, number2, number3);
console.log(`The maximum number is ${max}`);