const accountId = 14453
let accountEmail = "ahmed@google.com"
var accountPassword = "12345"
accountCity = "Rawalpindi"
let accountState;


// accounId = 2 Not allowed

accountEmail = "bilal@yahoo.com"
accountPassword = "2345256"
accountCity = "Islamabad"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var 
because of issue in block scope and funtional scope
*/