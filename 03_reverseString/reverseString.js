const reverseString = function(string) {
    let text = string;
    let charsArray = text.split("");
    charsArray = charsArray.reverse();
    text = charsArray.join("");
    return text;
};

// Do not edit below this line
module.exports = reverseString;
