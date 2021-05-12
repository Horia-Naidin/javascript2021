class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {}  //metoda " abstracta";
}

class Cat extends Animal {
    speak() {
        console.log('Miau!');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Ham!');
    }
}

class Duck extends Animal {
    speak() {
        console.log('Mac!');
    }
}

let felix = new Cat('Felix');
let astor = new Dog('Astor');
let lessie = new Dog('Lessie');
let donald = new Duck('Donald');

felix.speak();
astor.speak();
lessie.speak();
donald.speak();