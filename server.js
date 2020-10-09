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
        choices: ["View all roles","Update employee roles","View all departments", "view all employees", "Add employees", "Add department"]
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
                  case "Add employees":
                    return addEmployee()
                    break;
                    default:
                      case "Add roles":
                        return addRoles()
                        break;

                        case "view all employees":
                        return viewEmployees()
                        break;
                        case "Add department":
                        return addDepart()
                        break;
          
    
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
  
        function viewEmployees(){
          console.log("checking employee view")
          connection.query("SELECT * FROM employee",
            (err,data)=>{
            if(err)console.error(err)
            //console.log(data)
            console.table(data)
            onceMore()
            })}


            function addEmployee() {
              console.log("adding employee")
              inquirer
              .prompt([
                  {
                      name: "first_name",
                      type: "input",
                      message: "What is the employee's first name?"
                  },
                  {
                      name: "last_name",
                      type: "input",
                      message: "What is the employee's last name?"
                  }, 
                  {
                      name: "title",
                      type: "list",
                      message: "What is the employee's department",
                      choices: [
                          "Accounting",
                          "Legal",
                          "Maintenance",
                          "Vendor Management"
                      ]
                  }
              ])
              .then(function(answer) {
                connection.query(
                    "INSERT INTO allEmployee SET ?",
                    {
                        first_name: answer.first_name,
                        last_name: answer.last_name,
                        department_Name: answer.department_Name
                    }),
                    console.table(answer)
                   onceMore()
            })}


            function addDepart() {
              console.log("adding employee")
              inquirer
              .prompt([
                  
                  {
                      name: "name",
                      type: "input",
                      message: "What is the department Name"
                  }, 
                 
                  
              ])
              .then(function(answer) {
                connection.query(
                    "INSERT INTO department SET ?",
                    {
                        name: answer.name,
                       
                    }),
                    console.table(answer)
                   onceMore()
            })}











//works//
function viewDepartments(){
  console.log("checking view department")
  connection.query("SELECT * FROM department",
    (err,data)=>{
    if(err)console.error(err)
    //console.log(data)
    console.table(data)
    onceMore()
    })}

    //works//
function viewRoles(){
  console.log("view employee")
  connection.query("SELECT * FROM employe_role"
    , (err,data)=>{
    console.error(err)
    //console.log(data)
    console.table(data)
    onceMore()
  })}
//works//
function updateRoles(){
  console.log("updating role")
  connection.query("SELECT allEmployee.first_name, allEmployee.last_name, allEmployee.department_name, employe_role.title, allEmployee.id FROM allEmployee INNER JOIN employe_role ON allEmployee.id=employe_role.id ORDER BY employe_role.title",
    (err,data)=>{
    if(err)console.error(err)
    //console.log(data)
    console.table(data)
    const formattedNames= data.map(personob=>`${personob.first_name} ${personob.last_name}`)
    connection.query ("SELECT * FROM employe_role", (err2,data2)=>{
      console.table(data2)
      const roles= data2.map(x=>x.title)
        inquirer.prompt([{
          name: "whom",
          type: "list",
          message: "which one you want to update?",
          choices: formattedNames
          
        },{
          name: "where",
          type: "list",
          message: "which job they do?",
          choices: roles

        }]).then( answer=>{
          const newJob= data2.find(testOb=>testOb.title == answer.where)
          const employee= data.find(testOb=>`${testOb.first_name} ${testOb.last_name}` == answer.whom)
          const newJobId= newJob.id
          const employeeId = employee.id
         connection.query ("UPdate employee Set role_id = ? WHERE id = ?", [newJobId, employeeId], (err3,data3)=>{

           if(err3)console.error(err3)
          // console.log(data3)
         
         onceMore()
         })
                                                        
      })
    })
},
  


      function(err) {
          if (err) throw err;
          console.log("Employee added successfully.");
          console.table(res)
  onceMore()
}
);
};


function addDepartment(){
  inquirer.prompt([{
    message: " please name the department you would like to add",
    name: " newDepartment",
    type: "input"
  }]) .then(answer => {
    connection.query( "INSERT INTO department (id) VALUES (id)",
    answer.newDepartment,
    (err, newDeptadd) => {
      if (err) throw err;
      console.table(newDeptadd);
      onceMore();
    }
  )
})
};

   










