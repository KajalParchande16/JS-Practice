let myTeam=['Harman','Smriti','Jemi','Renuka','Arundhati','Sneh'];

let newArr=myTeam.forEach((e)=>(console.log(e)));
console.log(newArr)

//  forEach method does not return anything so newArr value will be getting undefined
myTeam.forEach((item,index,arr)=>{
// console.log(item,index,arr);
})
let Team= [
        {
            "Id": 101,
            "Name": " Banglore",
            "TeamUsers": [
                {
                    "Id": 1,
                    "Name": "Smrithi Madhana",
                    "Code": "Opening ",
                    "IsTeamLead": true
                },
                {
                    "Id": 2,
                    "Name": "Rich Ghosh",
                    "Code": "wicketKeeper",
                    "IsTeamLead": false
                },
                {
                    "Id": 3,
                    "Name": "Kranti Gaud",
                    "Code": "Bowler",
                    "IsTeamLead": false
                }
            ],
            "CaptainId": 123,
            "CaptainName": "Smriti Mandhana"
        },
        {
            "Id": 102,
            "Name": " Mumbai",
            "TeamUsers": [
                {
                    "Id": 21,
                    "Name": "HarmanPreet Kaur",
                    "Code": "BatsWomen",
                    "IsTeamLead": true
                },
                {
                    "Id": 16,
                    "Name": "Vaishnavi",
                    "Code": "All Rounder",
                    "IsTeamLead": false
                }
            ],
            "CapatainId": 124,
            "CaptainName": "HarmanPreet Kaur"
        }
    ];

    const myTeam1=Team.map((item)=>{
        if(Object.keys(item).length > 0)
        {
            item.noOfUsers=item.TeamUsers.length;
            if(item.TeamUsers.length >0)
            {
                item.isTeamLead=item.TeamUsers.find((e)=>{
                    if(e.IsTeamLead==true){
                        return true;
                    }
                })
            }
            return item;
        }
    });
    console.log(myTeam1);


    let myNums=[1,2,3,4,5,6,7,8,9];
    let newNums=myNums.filter((e)=>{
        return e >4;
    });
    console.log(newNums);

    // using forEach
    let newNumArr=[];
    myNums.forEach((e)=>{
        if(e >4)
        {
            newNumArr.push(e);
        }
    });
    console.log("Using forEach",newNumArr)

    // chaining

    let numbers=[1,2,3,4,5,6,7,8,9,10];
    const newList=numbers.map((e)=>e*10).map((e1)=>e1+1).filter((e2)=>e2>40);
    console.log(newList);