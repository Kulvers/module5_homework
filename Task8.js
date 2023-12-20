let arr = new Map([['a', 1], ['b', 2], ['d', 3], ['e', 4], ['f', 5], ['g', 6], ['h', 7], ['i', 8]]);

for (let [key, value] of arr){
    console.log(`ключ -  ${key}, значение - ${value}`);
}