//Q2 Find all users staying in Germany.

//let usersData=require("./usersData.cjs");

function usersStayingInGermany(obj){
    let users=[];
    for(let user in obj){
        for(let key in obj[user]){
            if(key==="nationality" && obj[user][key]==="Germany"){
                users.push(user);
            }
        }
    }

    return users;

}

module.exports=usersStayingInGermany;

//console.log(usersStayingInGermany(usersData));