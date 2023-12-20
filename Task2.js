var x = "3" ;

switch (typeof x) {
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