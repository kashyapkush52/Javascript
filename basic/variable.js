const accountId = 121314
let accountEmail = "Kush@gmail.com"
var accountPassword = "12345"
accountCity="Gaya"
let accountState;
/*
prefer not to use var because of issue in block scope and functional scope
*/

// accountId=2 /

accountEmail="Lav@gmail.com"
accountPassword="18"
accountCity="patna"
// console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountCity])

