const employee={
    name:['Bailey'],
    streetAddress:['123 Sesame Street']
}
 
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee
    
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee

}

function deleteFromEmployeeByKey(employee, key){
    const newKey = {...employee};
    delete newKey[key];
    console.log (newKey);
    return newKey
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    console.log(employee);
    return employee
}