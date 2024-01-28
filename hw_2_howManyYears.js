const  number = prompt('Введіть кількість років');
if (+number% 10 == 0  || number % 10 > 4  || number >= 11 && number <= 14) {
console.log (number + ' років')
} else if (number % 10 == 1){
console.log (number + ' рік')
} else if (number > 1 && number <5 && number % 1000 < 10 || number % 1000 >= 20) {
console.log (number + ' роки')
}
else if (number < 0 ){
console.log ('Невід\'ємне число недопустиме')
} else {
   console.log("Введіть лише числа")
}
