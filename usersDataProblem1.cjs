//Q1 Find all users who are interested in playing video games.

//let usersData=require("./usersData.cjs");

 function usersInterestedInPlayingVideoGames(obj){
    let users=[];
    for(let user in obj){
        for(let key in obj[user]){
            if(key==="interests" && obj[user][key].toString().includes("Playing Video Games")){
                    users.push(user);
            }
        }
    }

    return users;
 }

 module.exports=usersInterestedInPlayingVideoGames;

 //console.log(usersInterestedInPlayingVideoGames(usersData));
    