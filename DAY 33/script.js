const  fruits = ['Apple','Mango','Orange', 'Banana','strawberry'];
console.log(fruits);

let person ={

    name: 'Mano',
    empId: 22,
    mailId: 'manoramesh069@gmail.com',
    Address: {
        DoorNo: 5/45,
        Street: 'kovil street',
        Place: 'Trichy',
        pin: 604325

    },
    Hobbies:['Drawing','Craft work', 'Cleaning', 'Reading story','watching movies']

};

console.log(person);

for(let key in fruits)
{
    console.log(fruits[key]);
}

for(let key in person)
{
    console.log(person[key]);
}

let fruit = new Set(['Apple','Mango','Orange','Banana','Grapes']);
//let fruit = new Set([1,2,3,4,5,6]);
console.log(fruit);

fruit.forEach(element => {
    if(element=='Grapes')
    {
        console.log(element);
    }
});

console.log(fruit.has('Mango'));

const map = new Map();

map.set('hello world','Guava');
const arr = [1,2,3];
map.set(arr,{
    type:'numbers',
    value:arr,
});
console.log(map);

