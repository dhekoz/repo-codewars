/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

function solution(str, ending){
    // TODO: complete
    if (ending.length === 0) return true;
    return str.substr(-(ending.length)) === ending;
  }

  solution("california", "nia");

//   or

function solution (str, ending){
    return str.ensWith(ending);
}


// or
const solution = (str, ending) => (str.endsWith(ending));



