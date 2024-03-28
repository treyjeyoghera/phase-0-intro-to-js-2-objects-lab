// Write your solution in this file!
const employee = {
    name : 'ken',
streetaddress : `ruiru`
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({},employee, {[key]:value})
}
const employ = function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee [key]= value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {

    const Object = Object.assign({}, employee);
  
    delete Object[key];
  
    return Object;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
  
    return employee;
  }