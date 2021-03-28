//cara pertama
const stringPertama = ["abc", "abc", "xyz", "cde", "uvw"];
const stringKedua = ["abc", "cde", "uap"];
function strMatchup(stringPertama, stringKedua) {
  let arrRes = [];

  for (var i = 0; i < stringKedua.length; i++) {
    let ctr = 0;
    console.log(ctr);
    for (var j = 0; j < stringPertama.length; j++) {
      if (stringPertama[j] === stringKedua[i]) {
        ctr++;
      }
      console.log(arrRes);
    } //end for J
    arrRes.push(ctr);
  } //end for I
  return arrRes;
}

//Cara Kedua
const a = ["abc", "abc", "xyz", "cde", "uvw"];
const b = ["abc", "cde", "uap"];
function solve(a, b) {
   return b.map( function (cek) {
   
    let counter = 0;
    a.forEach((a) => {
      if (a === cek) {
        counter++;
      }
    });
    return counter;
  });
}
