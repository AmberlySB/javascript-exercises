

const repeatString = function(string, number) {
    if (number < 0) {
        return "ERROR";
    }
    else{
        let myString = "";
        for (i = 0; i < number; i++) {
            myString += string;
        }
        return myString;
    }
};

// Do not edit below this line
module.exports = repeatString;
