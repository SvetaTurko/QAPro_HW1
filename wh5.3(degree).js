function calculateDegree(a,b) {
let degree = 1;
for (let i = 1; i <= b; i++) {
degree = degree*a;
}
  return degree;
}
let a = 2;
let b = 3;
let result = calculateDegree(a,b);
console.log(result);
