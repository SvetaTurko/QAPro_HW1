const services = {
  haircut: 60,
  shaving: 80,
  washingHead: 100
};

services.totalPrice = function() {
  let total = 0;
  for (let service in this) {
    if (typeof this[service] === 'number') {
      total += this[service];
    }
  }
  return total;
};

services.minPrice = function() {
  let min = Infinity;
  for (let service in this) {
    if (typeof this[service] === 'number' && this[service] < min) {
      min = this[service];
    }
  }
  return min;
};

services.maxPrice = function() {
  let max = -Infinity;
  for (let service in this) {
    if (typeof this[service] === 'number' && this[service] > max) {
      max = this[service];
    }
  }
  return max;
};

services.breakingMirror = 200;

console.log("The total price of services is " + services.totalPrice() + " UAH");
console.log("The min price of services is "  + services.minPrice() + " UAH");
console.log("The max price of services is " + services.maxPrice() + " UAH");