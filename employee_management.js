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
};

const bia = new Employee("Bia", 75000, "Designer"); //adding a new employee and logging their details
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

