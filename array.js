const users=[
    {
        name:"mehmet",
        age:20,
    },{
        name:"nuray",
        age:35,
    },
    {
        name:"sevil",
        age:40,
    },
]


/*
push   sonuna ekleme yapar
map      her bir fonksiyonu getirir
find      istenilendi ilk bulduğunu getirir
filter     filtreler
some        true false döner    15 yaşında biri var mı?
every        true false döner
includes      içeriği soarabiliriz true false dönderir
&& ve
||veya
*/

/*users.push('ayşe');
users.push('FATMA');
users.push('rukiye');
users.push('ay');
users.push('güneş');

console.log(users);



users.map((yagmur)=>{
    console.log(yagmur);
})  



const result= users.find((item ) => item.name=="mehmet" && item.age > 20);
console.log(result);

const filtered = users.filter((item)=> item.name==="mehmet" || item.age <40);
console.log(filtered);

//some
const some= users.some((item)=>item.age===15);
console.log(some);

//every
const every=users.every((item)=>item.age>5);
console.log(every);*/

const meyveler=['elma','armut','muz'];
//const isIncluded=meyveler.includes("muz");
const isIncluded=meyveler.includes("portakal");
console.log(isIncluded);
