function solveManual(stringPertama,stringKedua){
  let arrRes =[];

  for (var i = 0; i < stringKedua.length; i++) {
    let ctr = 0;
    for (var j = 0; j < stringPertama.length; j++) {
      if (stringPertama[j]===stringKedua[i]) {
        ctr++;
      }
    } //end for J
    arrRes.push(ctr);
  }//end for I
  return arrRes;
}