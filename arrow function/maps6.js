// mapler - key(anahtar) - value (değer)

let myMap = new Map();

// console.log(myMap);

const key1 = "elif";

const key2 = {a:10,b:20};

const key3 = () => 2;

//set

myMap.set(key1,"string değer");
myMap.set(key2,"object literal değer");
myMap.set(key3,"function değer");

// get

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));


// map boyutu

// console.log(myMap.size);

// const cities = new Map();

// cities.set("ankara",5);
// cities.set("istanbul",15);
// cities.set("izmir",4);

// for each 

// cities.forEach(function(value,key){
//     console.log(key,value);
// })

// for of

// for(let [key,value] of cities){ //destructing yapısı
//     console.log(key,value);

// }

//map keys

// for(let key of cities.keys()){
//     console.log(key);
// }


//map value

// for(let value of cities.values()){
//     console.log(value);
// }

// //arraylerden map oluşturma
// const array = [["key1","value1"]["key2","value2"]];

// const lastMap =; new Map(array);

// console.log(lastMap);


//maplerden array oluşturma

// const cities = new Map();

// const cities = new Map();

// cities.set("ankara",5);
// cities.set("istanbul",15);
// cities.set("izmir",4);

// const array = Array.from(cities);



// console.log(array);


