var listOfUnit = 'time';
var amount = 2;

switch (listOfUnit) {
  case 'distance':
    console.log(amount + ' км це ' + amount*1000 +' м');
break;
  case 'time':
    console.log(amount + ' год це ' + amount*60 + ' хв');
break;
  case 'weight':
    console.log(amount + ' кг це ' + amount*10000 + ' г');
	break;
  default:
    console.log(listOfUnit  + ' не коректне значення');
}