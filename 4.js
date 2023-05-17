const cestaDeNumeros  = [1,-1,2,-2,3,4];
let numerosPositivos =[];
let numerosNegativos =[];
for(let i=0;i<cestaDeNumeros.length;i++){
  if(cestaDeNumeros[i]<0){
    numerosNegativos.push(cestaDeNumeros[i])
  }else{
    numerosPositivos.push(cestaDeNumeros[i])
  }
}

console.log(numerosPositivos)
console.log(numerosNegativos)