// TODO: Write code to define and export the Employee class

class Employee{
    constructor(name, id, email, role){
        this.name = name
        this.id = id
        this.email = email
        this.role = role
    }
    getRole(){
        return this.role
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getName(){
        return this.name
    }
}

module.exports = Employee
