// Task 1 - Create an Employee Class

class Employee {
    constructor(name, salary, position, department){
        this.name = name;
        this.salary = salary; 
        this.position = position; 
        this.department = department;
    } //created class of employees

    getDetails(){ // getting and returning the employee's details
        return (`${this.name} earns ${this.salary} working as a ${this.position}.`);
    }
}

const employee0 = new Employee("Bia", 75000, "Designer"); //adding a new employee and logging their details
console.log(employee0.getDetails());

// Task 2 - Create a Department Class

class Department {
    constructor (name){
        this.name = name;
        this.employees = [] //empty employees array to add objects to 
    }

    addEmployee(employee){
        this.employees.push(employee); // pushing employees into empty array
    }

    get getDepartmentSalary(){
        return this.employees.reduce((totalSalary, employee) => totalSalary + employee.salary, 0);
    } // calculate total salary with reduce method 

    // Task 4 - Handle Bonuses for Managers

    calcutaleTotalSalaryWithBonus(){
        return this.employees.reduce((totalSalary, emp) => {
            return totalSalary + emp.salary + (emp.bonus ? emp.bonus:0);
        }, 0); // calculate total salary with bonusus 
    }
}

// Task 3 - Create a Manager Class that Inherits from Employee

class Manager extends Employee {
    constructor(name, salary, position, department, bonus){
        super(name, salary, position, department); //super calls the employee class 
        this.bonus = bonus; // added bonus property
    }

    getDetails(){
        return (`${this.name} earns ${this.salary} working as a ${this.position}. Bonus is ${this.bonus}.`);
    } // returning details 
}

const manager0 = new Manager("Max", 115000, "Marketing Manager", "Marketing", 22000);
console.log(manager0.getDetails());

// Task 5 - Create and Manage Departments and Employees

// departments
const marketing = new Department("Marketing");
const humanResources = new Department("Human Resources");

// employees
const bia = new Employee ("Bia", 95000, "Designer", "Human Resources");
const paulo = new Employee("Paulo", 100000, "Developer", "Marketing");

//Managers
const max = new Manager ("Max", 115000, "Marketing Manager", "Marketing", 22000);
const fabio = new Manager("Fabio", 120000, "Human Resources Manager", "Human Resources", 20000);

//adding employees
marketing.addEmployee(paulo);
marketing.addEmployee(max);

humanResources.addEmployee(bia);
humanResources.addEmployee(fabio);

// log total salary for each department
console.log(`Total Salary for Marketin Department: $${marketing.getDepartmentSalary}.`);
console.log(`Total Salary Plus Bonusus for Marketing Department: $${marketing.calcutaleTotalSalaryWithBonus()}.`);

console.log(`Total Salary for Human Resources Department: $${humanResources.getDepartmentSalary}.`);
console.log(`Total Salary Plus Bonusus for Human Resources: $${humanResources.calcutaleTotalSalaryWithBonus()}.`);
