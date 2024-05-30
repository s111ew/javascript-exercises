// Implement a function that takes an array and some other arguments then removes the other arguments from that array:

// removeFromArray([1, 2, 3, 4], 3);

//REMOVE ARGUMENTS FROM ARRAY
//---------------------------
//RECEIVE AN ARRAY AS AN ARGUMENT
//RECEIVE N AMOUNT OF OTHER NUMERIC ARGUMENTS
//CHECK ARRAY TO SEE IF ANY OF THE ARGUMENTS ARE PRESENT
//IF THEY ARE PRESENT, REMOVE THEM
//RETURN NEW ARRAY






const removeFromArray = function(array, ...args) {
    return array.filter(item => !args.includes(item));
}

// Do not edit below this line
module.exports = removeFromArray;
