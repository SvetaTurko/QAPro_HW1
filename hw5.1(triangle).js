function triangle(height, symbol) {
  for (var i = 1; i <= height; i++) {
    var row = '';
    for (var j = 1; j <= i; j++) {
      row = row + symbol;
    }
    console.log(row);
  }
}

triangle(5, '*');

function triangle(height, symbol) {
    var i = 1;
    while (i <= height) {
    var row = '';
    var j = 1;
    while (j <= i) {
    row = row + symbol;
    j++;
    }
    console.log(row);
    i++;
    }
    }
    triangle(5, '*');