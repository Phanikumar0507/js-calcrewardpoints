const calcRewardPoints = (cash) => {
if(cash > 100) {
  return (Math.round(cash - 100)*2) + (1 * 50);
}else if (cash > 50) {
  return Math.round(cash - 50)*1
}
return 0
}


console.log(calcRewardPoints(120))
console.log(calcRewardPoints(74.6))
console.log(calcRewardPoints(24))