const palindromes = function (string) {
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    string = string.replace(/ /g,"")

    string = string.toLowerCase();
    const stringArray = string.split("");

    if (stringArray.length % 2 !== 0) {
    stringArray.splice( (Math.floor(stringArray.length / 2)), 1)
    };

    const stringArrayStart = JSON.stringify(stringArray.slice(0, (stringArray.length / 2)));
    const stringArrayEnd = JSON.stringify(stringArray.slice((stringArray.length / 2)).reverse())

    if (stringArrayStart === stringArrayEnd) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
