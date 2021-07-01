// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = (drivers) => {
    let newDriver = drivers.slice(0,2)
    return newDriver
    
}
const returnLastTwoDrivers = (drivers) => {
    let newDriver = drivers.slice(-2)
    return newDriver   
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


const createFareMultiplier = (num1) => {
    return function(num2) {
    return num1 * num2;
  };
}
const fareDoubler = (num1) => {
    return num1 + num1;
}
const fareTripler = num1 => {
    return num1 + num1 + num1;
}
const selectDifferentDrivers = (drive, twoDrivers) => {
    return twoDrivers(drive)
   
   
}
selectDifferentDrivers(drivers, returnFirstTwoDrivers)
selectDifferentDrivers(drivers, returnLastTwoDrivers)
// let newDrive = function (){returnFirstTwoDrivers,returnLastTwoDrivers}
//     return drivers + newDrive()
    