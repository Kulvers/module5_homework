
var tall = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

liste(tall);

function liste(arr) {
  var sumOdd = 0;
  var sumPar = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumPar++;
    } else {
      sumOdd++;
    }
  }
  
  console.log("Odd : " + sumOdd);
  console.log("Par : " + sumPar);
}
