//LEAP YEARS
//------------
//IF DIVISIBLE BY 4 == TRUE
//BUT IF DIVISIBLE BY 100 == FALSE
//UNLESS IF DIVISIBLE BY 400 == TRUE


const leapYears = function(num) {
    if ((num % 100 == 0) && (num % 400 != 0)) {
        return false;
    } else if (num % 4 == 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
