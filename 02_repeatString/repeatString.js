const repeatString = function(string, num) {
   let text = string;
   let i = 0;
   if (num < 0) {
    return "ERROR"
   } else {
   while (i <= num) {
    text = string.repeat(i)
    i++;
   }
}
   return text;
};

// Do not edit below this line
module.exports = repeatString;
