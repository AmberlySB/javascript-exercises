const reverseString = function(string) {
    let stringArray = string.split("");
    let stringResult = "";
    for (i = 0; i < stringArray.length; i++) {
        stringResult += stringArray[stringArray.length - 1 - i];
    }
    return stringResult;
};

// Do not edit below this line
module.exports = reverseString;
