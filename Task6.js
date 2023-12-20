var arr = [3, 3, 3, 3, 3, 2, 3, 3];

var arrTrue = true;
for (var i = 0; i < arr.length - 1; i++){
    for (var j = i + 1; j < arr.length; j++){
        if (arr[i] !== arr[j]){
            arrTrue = false;
        }
    }
}
    console.log(arrTrue);
