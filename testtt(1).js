function namaFungsi(parameter1, parameter2) {
  //Expression
}

let namaFungsi1 = parameter1 => {
  //Expression
}

let namaFungsi2 = (parameter1, parameter2) => {
  //Expression
};
let namaFungsi3 = (parameter1,parameter2) =>parameter1+parameter2; //expression

//parameter bisa berisi fungsi
let parameterX = function (param1) {
  //Expression
};

if (true) { // Expression/codenya
}

//if yang satu line, line biasanya diakiri tanda " ; " titik koma
// console.log(param2);console.log("param1"); --> ini 2 line, karena ada 2 titik koma, meskipun satu baris.
// stringSS.split().filter(); -->ini satu line, karena bisa ditulis dengan satu titik koma, meskipun dia menjalankan 2 kali fungsi built in
//

if (true) console.log("Benar2");//Expression/codenya


class MyClass {
  func1(){
    console.log("class 1");
  };
}

for (var i = 0; i < 10; i++) {
  //expressi
}

let condition1 = true
while (condition1) {
  //Expression
  condition1 =false;
}

let obj = {
  name: "saya",
  pet: "kucing",
};

let stringIf ='';

// shortcut if biar bisa buat ngecek object.property itu ada atau enggak.
//if (obj.name) hasilnya true,
// if (obj.alamat) hasilnya false
// setiap error, null, undefined, dan ("" / '' / string kosong ) akan jadi false
if (obj.name) {
  console.log("Test Object Benar");
}
if (stringIf) {
  console.log("Test string kosong jadinya true");
  console.log(stringIf);
} else {
  console.log(stringIf);
  console.log("Test string kosong jadinya false");
}

let stringS = "Javascript";
let result = stringS
  .split("")
  .filter((filteran) => {
    return filteran == "a";
  })
  .filter((x) => {
    return x == "5";
  });
console.log(result);

const array1 = [1, 4, 9, 16];

// pass a function to map
console.log("array map ==================");
const map1 = array1.map((curVal,idx,array) => {
  console.log(curVal);
  console.log(idx);
  console.log(array);
  return curVal * 2;
});
console.log(map1);
