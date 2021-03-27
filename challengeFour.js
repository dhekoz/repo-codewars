const data = [];
let organized = [];
let sorted = [];

const randomNumber = Math.floor(Math.random() * 100);

function createArray() {
  for (let i = 0; i < randomNumber; i++) {
    data.push(createArrayElement())
  }

  // Recursive
  if (data.length == 0) {
    createArray();
  }
}

function createArrayElement() {
  let random = Math.floor(Math.random() * 1000);

  return [null, random][Math.floor(Math.random() * 2)]
}

createArray();

console.log(data);

function clean(data) {

  organized = data.filter(function (el){
    return el != null;
  });



console.log(organized);
bubbleSort(organized);
}

function bubbleSort(organized) {
  let temp;

  for (let i = 0; i < organized.length; i++) {
    for (let j = 0; j < organized.length - i - 1; j++) {
        if (organized[j] > organized[j + 1]) {
            temp = organized[j];
            organized[j] = organized[j + 1];
            organized[j + 1] = temp;
      }
    }
  }


console.log(organized); 
}

/*
 * DON'T CHANGE
 * */

if (process.argv.slice(2)[0] == "test") {
  try {
    clean(data).forEach(i => {
      if (i == null) {
        throw new Error("Array still contains null");
      }
    })
  }

  catch(err) {
    console.error(err.message);
  }
}