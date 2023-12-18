var a = prompt("Input a number");

a = +a
var type = typeof a;


if ( type === "number" ) {
  var even = a % 2 == 0
    console.log(even);
    if ( even == true )
      console.log("Чётное")
    else
      console.log("Не чётное");}
else
  console.log("Кажется вы ошиблись");
