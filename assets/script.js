// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data

let employees = []

const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  while(true) {
    let firstName = prompt("Employee's First Name: ");
    if(!firstName) {
      break;
    }
    console.log()
    let lastName = prompt("Employee's Last Name: ");
    if(!lastName) {
        break;
      }
    console.log(lastName)
    let salary = prompt("Employee's Salary: ");
    if(!salary) {
        break;
      }
    if(isNaN(salary)) {
      alert("Please enter a number for the salary.");
    }

    const employee = {firstName, lastName, salary};

    employees.push(employee);
    console.log(employees);


}
return employees;
}

// Display the average salary
const displayAverageSalary = function(employees) {
  // TODO: Calculate and display the average salary
  let averageSalarySubtotal = 0;
  
  for (let i = 0; i < employees.length; i++) {
  averageSalarySubtotal += parseInt(employees[i].salary);
  }
  let averageSalary = averageSalarySubtotal / employees.length;
  console.log(averageSalary);

  console.log(`AVG Salary ${averageSalary.toFixed(2)}`);
}

// Select a random employee
const getRandomEmployee = function(employees) {
  // TODO: Select and display a random employee
  // Math.random returns a random value within the employees. Math.floor contains Math.random to round it down so we get a valid index in the range of the array.
  const randomEmployee = Math.floor(Math.random() * employees.length);
  return randomEmployee;
}
getRandomEmployee(employees);

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employees) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employees.length; i++) {
    const currentEmployee = employees[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
  getRandomEmployee(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
