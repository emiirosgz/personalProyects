// arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a,fruits[1]);

// object destructuring
let user = {username: 'Oscar', age: 30};
let {username, age} = user;
console.log(username, user.age);

// spread operator
let person = {name: 'Oscar', age: 29};
let country = 'MX';

let data = { id:1, ...person, country};
console.log(data);

// rest
function sum(num, ... values){
    console.log(values);
    console.log(num + values[0]);
}
sum(1, 1, 2, 3);

function solution(json1, json2) {
    // Tu código aquí 👈
     let j1 = json1 || {
       name: "Mr. Michi",
       food: "Pescado"
     };
     let j2 = json2 || {
       age: 12,
       color: "Blanco"
     };
     dataMichi = {...j1, ...j2};
    }
    console.log(dataMichi);
     
