// Write your solution in this file!

const employee = {name: "bob", streetAddress: "12 west side"}

function updateEmployeeWithKeyAndValue(employee, key, value){
 return{...employee,
 [key]: value,
 }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
   const updateEmployee=  {...employee}
        delete updateEmployee[key]
    return updateEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
     delete employee[key]

     return employee
}