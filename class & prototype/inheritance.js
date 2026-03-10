class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`Hi ${this.name}`);
    }
}

class Customer extends Person{
    constructor(name,age,accountNo,balance){
        super(name,age);
        this.accountNo=accountNo;
        this.balance=balance;
    }
    checkBalance()
    {
        return this.balance;
    }
}

const cust1=new Customer('Mohan',20,1234,5000);
console.log(cust1);
console.log(cust1.sayHi());