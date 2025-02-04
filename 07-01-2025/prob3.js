function updateEmployeeDetails (employee,up){
    return {...employee,role:up};
}
const employee={name: 'Afroz', role: 'Developer', age: 28, location: 'IN'}
const res=updateEmployeeDetails(employee,'Senior Developer');
console.log(res);