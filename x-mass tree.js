function xMasTree(n){ //complete this code let a =[] let m = n + n - 1 for (i=1; i <= n; i++){ let re = '' for (j=1; j <= n -i; j++){ re += ('_') } for(k =1; k <= i *2 -1; k++){ re += ('#') } for (c=1; c <= n -i; c++){ re += ('_') } console.log(re) a.push(re) } console.log(a[0]) console.log(a[0]) a.push(a[0]) a.push(a[0]) return a }function xMasTree(n){
   //complete this code
  let a =[]
  let m = n + n - 1
  for (i=1; i <= n; i++){
    let re = ''
    for (j=1; j <= n -i; j++){
      re += ('_')
    }
    for(k =1; k <= i *2 -1; k++){
      re += ('#')
    }
    for (c=1; c <= n -i; c++){
      re += ('_')
    }
      
    console.log(re)
  a.push(re)  
    
  }
  console.log(a[0])
  console.log(a[0])
  a.push(a[0])
  a.push(a[0])
  return a}