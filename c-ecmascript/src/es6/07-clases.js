// clases, declaradas
class User {}

// Instancia de una clase
// const newUser = new User();

class user {
// metodos
    greeting(){
        return 'Hello';
    }
};

const gndx = new user();
console.log(gndx.greeting());

// contructor

class user {
    // contructor
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting(){
        return 'Hello';
    }
}

const david = new user();

// this 
class user {
    constructor(name){
        this.name = name;
    }
    // metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting())

// setters getters
class user {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak() {
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n
    }
}

const roberto = new user('Roberto', 10);
console.log(roberto.uAge, roberto.greeting());
console.log(roberto.uAge = 20, roberto.greeting());