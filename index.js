// Code your solution in this file!


const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
}
// I used const to declare returnFirstTwoDrivers so that the variable cannot be reassigned.
// I assigned an anonymous function to returnFirstTwoDrivers. The function takes one argument, drivers, which is expected to be an array.
// Used the .slice(0, 2) method is used to return the first two elements of the array.



const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
}
// I used const to declare returnLastTwoDrivers, ensuring the variable cannot be reassigned.
// The anonymous function takes an array drivers as its argument.
// The .slice(-2) method returns the last two elements from the array, as it extracts from the second-last element to the end.



const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// selectingDrivers is an array with returnFirstTwoDrivers and returnLastTwoDrivers as its elements.



function createFareMultiplier(multiplier){
return function (price){
    return price * multiplier;
}
}


const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers (drivers, fn){
return fn(drivers);
}