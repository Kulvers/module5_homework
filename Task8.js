
let autos = new Map();
autos.set("auto 1", "sedan");
autos.set("auto 2", "hatchback");
autos.set("auto 3", "Offroad");
autos.set("auto 4", "Crossover");
autos.set("auto 5", "Limosine");
autos.set("auto 6", "Rodster");
autos.set("auto 7", "Pickupp");

for (let auto of autos.keys()){
    console.log(auto + " is " + autos.get(auto));
}