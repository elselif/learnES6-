// setler- kümeler

const mySet = new Set();

mySet.add(100);
mySet.add(100);
mySet.add(3.14);
mySet.add("mustafa");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1,b:2});

const mySet2 = new Set([100,3.14,"elif"]);

console.log(mySet2);
console.log(mySet);

//size

console.log(mySet.size);

//delete

// mySet.delete("elif");
// console.log(mySet);

// has metodu

console.log(mySet.has("elif")); //true
console.log(mySet.has(2000)); //false

console.log(mySet.has([1,2,3])); //false (referans veri tipi çünkü)

//for each

mySet.forEach(function(value)){
    console.log(value);
}

//for of

for(let value of myset){
    console.log(value);
}

const array = Array.from(myset);

console.log(array);
