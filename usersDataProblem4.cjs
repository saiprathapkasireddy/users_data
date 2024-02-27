//Q4 Group users based on their Programming language mentioned in their designation.

//let usersData=require("./usersData.cjs");

function usersWithTheirDesignation(obj){
    let usersDesignation=[];
    for(let user in obj){
        for(let key in obj[user]){
            if (key==="desgination"){
                usersDesignation[user]=obj[user][key];
            }
        }
    }

    return usersDesignation;
}

module.exports=usersWithTheirDesignation;

//console.log(usersWithTheirDesignation(usersData));