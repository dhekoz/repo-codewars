// cara pertama
let str = "world";

let splitStr = str.split("");
console.log(`This is splitStr: ${splitStr}`);
let reverseStr = splitStr.reverse();
console.log(`This is reverseStr: ${reverseStr}`);
let finalReversed = reverseStr.join("");
console.log(`This is finalReversed: ${finalReversed}`);
return finalReversed;

// cara kedua

let str = "hello";
var reversedStr = str.split("").reverse().join("");
console.log(reversedStr);

//cara ketiga
let str = "Deddie";

for (var i = str.length - 1; i >= 0; i--) {
  console.log(str[i]);
  str = str + str[i];
}
console.log(str);
