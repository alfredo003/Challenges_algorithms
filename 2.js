function numberRoma(romano){
  let n = 0;
  const number = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
  }
  for(let i=0;i<romano.length;i++){
    let actual = romano[i];
    let prox = romano[i+1];

    if(prox && number[prox]> number[actual]){
      n -= number[actual];
    }else{
      n+= number[actual];
    }
  }

  return n;
}


console.log(numberRoma(''))