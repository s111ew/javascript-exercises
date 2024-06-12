  const findTheOldest = function(arr) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].yearOfDeath) {
            arr[i].yearOfDeath = currentYear;
        }
    }

    const sortedArray = arr.sort((a, b) => {
        const ageA = a.yearOfDeath - a.yearOfBirth;
        const ageB = b.yearOfDeath - b.yearOfBirth;
        return ageB - ageA;
    });
    return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
