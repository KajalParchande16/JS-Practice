# javascript and classes

## OOP

## Object
- collection of properties and methods
-toLowerCase

## why use OOP

## parts of OOP
Object Literal

- Constructor Function
- Prototypes
- Classes
- Instances(new & this keyword)

## 4 Pillars
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism

## Abstraction
- Details hide karna 
Example fetch()

## Encapsulation
- Wrappers add krana data ke upper

## Plymorphism

- many types

## Instances
- Example const Promise1=new Promise();
- new =>Constructor Function
- means 1 he object ke multiple instance create kr sakate ho
- Without new keyword

```Javascript
function Players(name, jerseyNo, score) {
    return {
        name: name,
        jerseyNo: jerseyNo,
        score: score
    }
    // we can retun like that also with this keyword
    
}
const players1 = Players('Harman', 23, 171);
console.log(players1);
const players2 = Players('Smriti', 18, 100);
console.log(players2);
```
- Without new Keyword another example(it will override 1st value)
```Javascript
function newTeam(name, jerseyNo, score) {
    this.name = name;
    this.jerseyNo = jerseyNo;
    this.score = score;
    return this
}

const newPlayer1 = newTeam('Vaishnavi', 2, 34);
console.log(newPlayer1);

const newPlayer2 = newTeam('Kamilini', 4, 54);
console.log(newPlayer2);
```
- With new keyword (not need to return from function)
```javascript
function newTeam(name, jerseyNo, score) {
    this.name = name;
    this.jerseyNo = jerseyNo;
    this.score = score;
}

const newPlayer1 = new newTeam('Vaishnavi', 2, 34);
console.log(newPlayer1);

const newPlayer2 =new  newTeam('Kamilini', 4, 54);
console.log(newPlayer2);
```

## new keyword

- create empty object
- constructor function call hota hai new keyword ke karan(bind argument)
- this keyword me function ke arguments inject hote hai
- getting all argumets values