let user={
    name:'Richa',
    role:'WK',
    runs:55,
    team:'Team A',
    getMatch:function()
    {
        // console.log(user.name +" is playing for Aus T20 as "+ user.role);
        // if we using user.name & user.role this will point only user object name & role 
        // but if we assign that object to another object with diff name & role still that 2nd obje ref user.name & user.role
        // to user spefict data of specific object we use this keyword
        // console.log(this.name +" is playing for Aus T20 as "+ this.role);
       return this.name +" is playing for Aus T20 as "+ this.role;
         

    }
    
}
let user2={
    name:'Smrithi',
    role:'Opening Batsman'
}
 user2.getMatch=user.getMatch;

console.log(user.getMatch());
console.log(user2.getMatch());