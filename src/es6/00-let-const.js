var lastName = 'David'; //declarar
lastName = 'Oscar'; //re asignar
console.log(lastName);

let fruit = 'Apple'; //declarar
fruit = 'Kiwi'; //re asignar
console.log(fruit);

const animal = 'dog'; //declarar
animal = 'cat'; // No se puede re asignar
console.log(animal);

const fruits = () => {
    if(true){
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Banana'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();
