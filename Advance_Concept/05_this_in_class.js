class Person {
    constructor(name,age)
    {
        console.log(this);
        this.name=name;
        this.age=age;
    }

    sayHi()
    {
        console.log(`hi ${this.name}`);
    }
}

const person1=new Person();
console.log(person1);
const person2=new Person("Radhav",20);
console.log(person2);