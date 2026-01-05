const player1 = {
    name: 'Smriti',
    jerseyNo: 18,
    role: 'Vice-Captain',

    getAllDetails: function () {
        console.log(this);
        console.log(`${this.name} is Vice-Captain of Indian Women's Cricket Team`);
        // return this.name
        // this refer to current context(data)
        // for browser this refer to window object

        // getting undefined because not returning anything from function
    },
    
    printName:()=>{
        console.log(this);
        console.log(this.name);
    }
}

console.log(player1.getAllDetails());
console.log(player1.printName());

console.log(this);