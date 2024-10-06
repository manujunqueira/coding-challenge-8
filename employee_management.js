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

const bia = new Employee("Bia", 75000, "Marketing"); //adding a new employee and logging their details
console.log(bia.getDetails());

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
        return this.employees.reduce((totalSalary, employee) => totalSalary + employeeSalary, 0);
    } // calculate total salary with reduce method 
};

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

const max = new Manager("Max", 115000, "Analyst", "Business, 22000");
console.log(max.getDetails());

