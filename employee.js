var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Code1289!",
  database: "employee_trackerDB"
});
connection.connect(function(err) {
    if (err) throw err;
    start();
}); 
function start() {

    //figure out what they want to do
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "what to do",
        choices: ["view roles", "view departments",]
      }).then(answers=>{
        switch (answers.action) {
          case "view roles":
              viewRoles()
            break;
          case "view dep":
            
            break;
        
          default:
            break;
        }
      })



      // .prompt({
      //   name: "employee",
      //   type: "input",
      //   message: "employee first and last name",
      //   choices: ["first_name", "last_name",]
      // })
      //.then(function(answer) {
        // based on their answer, either call the bid or the post functions
        // if (answer.postOrBid === "POST") {
        //   postAuction();
        // }
        // else if(answer.postOrBid === "BID") {
        //   bidAuction();
        // } else{
        //   connection.end();
        // }
    //   });
  }
function viewRoles(){
  connection.query("SELECT * FROM employe_role", (err,data)=>{
    console.log(err)
    console.log(data)
    console.table(data)
  })
}