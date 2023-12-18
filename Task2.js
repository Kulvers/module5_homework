var x = "3" ;


var type = typeof x;


switch (type) {
    case "number":
        console.log('х = числу');
        break;
    case "string":
        console.log('х = строке ');
        break;
    case "boolean":
        console.log('х = логическому типу');
        break;
 
    default:
        console.log('Тип x не определён');
}