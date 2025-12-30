let users={
    userName:'Deepti',
    occupation:'Best Bower',

    getAllDetails:function(){
        console.log(`${this.userName} is ${this.occupation} in indian womens criket team`);
        console.log(this);
        // this represt current context(data);
    }
}

users.getAllDetails();
users.userName='Sneh Rana';
users.getAllDetails();

console.log(this);
// in node environment this is empty object
// but in browser this refrest to window object