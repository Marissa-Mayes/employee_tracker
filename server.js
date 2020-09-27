var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require("console.table");

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
  console.log("start test")

    //figure out what they want to do
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "what would you like to do?",
        choices: ["View all roles", "View all departments","Update employee roles", "Add departments","Add roles","Add employees"]
      }).then(answers=>{
        switch (answers.action) {
          case "View all roles":
              return viewRoles()
            break;
          case "View all departments":
            return viewDepartments()
            break;
            //case "view all employees":
             // return viewEmployees()
              //break;
              case "Update employee roles":
                return updateRoles()
                break;
                default:
    
          //case "exist":
           // connection.end()
            //process.exit()
        
        }
     });
     

    }function onceMore(){
      inquirer.prompt({
        name: "again",
            type: "confirm",
            message: "want to do something else?",
            //choices: ["Yes", "No"]
      }).then(answer=>{
        switch (answer.again){
        case true: 
          start()
          break;
        case false:
          connection.end()
          process.exit(0)
          break;
        }
      }
        )}

    //works//
function viewRoles(){
  console.log("view employee")
  connection.query("SELECT * FROM employee"
    , (err,data)=>{
    console.error(err)
    //console.log(data)
    console.table(data)
    onceMore()
  })}
//works//
function updateRoles(){
  console.log("updating role")
  connection.query("SELECT allEmployee.first_name, allEmployee.last_name, allEmployee.department_name, employe_role.title FROM allEmployee INNER JOIN employe_role ON allEmployee.id=employe_role.id ORDER BY employe_role.title" ,
    (err,data)=>{
    if(err)console.error(err)
    //console.log(data)
    console.table(data)
    onceMore()

})}


function viewDepartments(){
  console.log("checking view department")
  connection.query("SELECT * FROM department",
    (err,data)=>{
    if(err)console.error(err)
    //console.log(data)
    console.table(data)
    onceMore()

})};

//function viewEmployees(){
  // connection.query("SELECT * FROM allEmployee ", 
  //   (err,data)=>{
  //   if(err)console.error(err)
  //   console.log(data)
  //   console.table(data)
  //   onceMore()

//   function updateRoles(){
//   console.log("update role attempt")
// connection.query( "SELECT * FROM employe_role"),
// (err,data)=>{
//   if (err)
//  console.error(err)
//  //console.log(data)
//  console.table(data)
//  onceMore()



     
//}};
  






