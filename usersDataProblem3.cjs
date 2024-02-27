//Q3 Find all users with masters Degree.

//let usersData=require("./usersData.cjs");

function usersWithMastersDegree(obj){
    let users=[];
    for(let user in obj){
        for(let key in obj[user]){
            if(key="qualification" && obj[user][key]==="Masters"){
                users.push(user);
            }
        }
    }
    return users;
}

module.exports=usersWithMastersDegree;


//console.log(usersWithMastersDegree(usersData));