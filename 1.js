
function main(age){
  
 const ONE_YEAR =365;
 const year = parseInt(age / ONE_YEAR);
 const rest = parseInt(age % ONE_YEAR);
 const months = parseInt(rest / 30);
 const day = parseInt(rest % 30);
 return {
  year :year+' anos(s)',
 months: months+' mes(s)',
  day:day+' dia(s)'
 }
}

console.log(main(400))