const removeFromArray = function(array, ...moreArgs) {
    for(i = 0; i < array.length; i++) {
        for (j = 0; j < moreArgs.length; j++) {
            if (moreArgs[j] === array[i]) {
                array.splice(i, 1);
                i = 0;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
