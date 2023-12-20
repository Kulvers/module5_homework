var a = prompt("Введите значение");

if (( typeof(+a) == "number" ) &&(!isNaN(+a)))
    if (a % 2 === 0) {
       console.log("Чётное");
    } else {
       console.log("Не чётное");
    }
  else {
     console.log("Кажется вы ошиблись");
  }  