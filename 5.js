let number1 = 1;
let number2 = 10;

let result1 = 1;
let result2 = 1;

do{
  if((number1 % 2) == 0){
   number1 = number1/2; 
  }else{
   number1 = (number1*3)+1
  } 
  result1++;
}while(number1 > 1);

do{
  if((number2 % 2) == 0){
   number2 = number2/2; 
  }else{
   number2 = (number2*3)+1
  }
  result2++;
}while(number2 > 1);
console.log("Resultado1 :"+result1)
console.log("Resultado2 :"+result2)