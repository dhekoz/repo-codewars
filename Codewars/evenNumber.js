function evenNumbers(array, number) {
    // good luck
    let arr= [];
    for (i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
        arr.push(array[i]);
      }
    }
    let minus = arr.length - number;
    for(let i = 0; i < minus; i++){
      arr.shift();
    }
    return arr;
  }