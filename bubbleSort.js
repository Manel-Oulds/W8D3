const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

const absurdBubbleSort= function (arr, sortCompletionCallback){

    let outerBubbleSortLoop = function(sorted) {
        if (sorted) {
            sortCompletionCallback(arr);
        } else {
            sorted = true;
            innerBubbleSortLoop(arr,0,sorted,outerBubbleSortLoop);
        }
    }   
    outerBubbleSortLoop(false);
}


const sortCompletionCallback = function(arr) {
    console.log(arr);
    reader.close();
}

const innerBubbleSortLoop = function(arr,i,sorted,callback) {
    if (i < arr.length-1) {
        askIfGreaterThan(arr[i],arr[i+1], (res) => {
            if(res === true){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
                sorted = false;
            } 
            innerBubbleSortLoop(arr,i+1,sorted,callback);
        });
    }
    else if(i >= arr.length-1) {
        callback(sorted);
    }
}

const askIfGreaterThan = function (el1,el2,callback){
    reader.question(`Is ${el1} greater than ${el2}?`, (res) => {
        if (res === 'yes') {
            return callback(true);
        } else if (res === 'no') {
            return callback(false);
        }
    });
}


// askIfGreaterThan(2,1,callback)
absurdBubbleSort([1,3,2,4],sortCompletionCallback);