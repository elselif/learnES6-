// let number1,number2;

// arr = [100,200,300,400];

// number1 = arr[0];
// number2 = arr[1];

//destructing

// [number1,number2] = arr;

//veya

// const[number1,number2] = arr;

//obje destructing

//function destructing

// const getLangs = () => ["Pyhton","java","c++"];

// const [lang1,lang2,lang3] = getLangs();
// console.log(lang1);

const person = {
    name: "elif emre",
    year:1993,
    salary:3000,
    showInfos: () => console.log("bilgiler gösteriliyor")
}

const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster} = person;

console.log(isim,yil,maas);

bilgileriGoster();
