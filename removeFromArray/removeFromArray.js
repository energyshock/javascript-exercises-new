const removeFromArray = function(array, ...args) {
    let moreArgs = Array.from(args);
    console.log(array);
    console.log(moreArgs);
    //let listOfArgs = "";
    let index = 0;

    if (moreArgs.length > 1) {
        for (let i = 0; i < moreArgs.length; i++) {
            index = array.indexOf(moreArgs[i]);
            if (index > -1) {
                array.splice(index, 1);
            }
            //listOfArgs += args[i];
        }
    } else {
        index = array.indexOf(moreArgs[0]);
        if (index > -1) {
            array.splice(index, 1);
        }
        //listOfArgs += args[1];
    }
    return array;
}

console.log(removeFromArray([1, 2, 3, 4], 3));

module.exports = removeFromArray
