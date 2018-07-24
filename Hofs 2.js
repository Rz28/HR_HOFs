function each(coll, func){
    if(Array.isArray(coll)){
        for(var i = 0; i < coll.length; i++){
            func(coll[i], i, coll);
        }
    }else {
        for(var key in coll){
            func(coll[key], key); 
        }
    }
}
//Exercise 1
// input: array of numbers
// output new array of raised to power of index
function indexedExponentials(numbers) {
    //create new array
    var poweredToIndex = [];
    //loop through numbers array with each()
    each(numbers, function(el,i){
        //push raised ele to power of index
        poweredToIndex.push(Math.pow(el, i));
    });
    //return new array
    return poweredToIndex;
}
//console.log(indexedExponentials([2,5,7,4]));


//Exercise 2
// input: array of numbers
// output: return array of only odd numbers with "EVEN" indices
function evenIndexedOddNumbers(numbers) {
    //create odd number array
    var evenIndexOddNumbers = [];
    //loop through numbers array with each
    each(numbers, function(ele, i){
        //if index is even
        if(i % 2 === 0){
            //push el to array
            evenIndexOddNumbers.push(ele);
        }
    });
    //return array
    return evenIndexOddNumbers;
}
// console.log(evenIndexedOddNumbers([1,3,3,4,7,10]))

//Exercise 3
// input: array of strings
// output: return strings at even index & has even length
function evenIndexedEvenLengths(strings){
    //create evenIndexAndLength = [];
    var evenIndexAndLength = [];
    //loop through string array with each
    each(strings, function(ele, i){
        //if index is even & length of string is even
        if(i % 2 === 0 && ele.length % 2 === 0){
            //push ele to empty array
            evenIndexAndLength.push(ele);
        }
    });
    //return array
    return evenIndexAndLength;
}

//console.log(evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"]));


//Exercises - Each Objects

// input: obj
// output: array of obj values
function values(obj){
    //creat empty array
    var objValues = [];
    //loop through obj using each
    each(obj, function(key){
        //push obj values into empty array
        objValues.push(key);
    });
    //return array
    return objValues;
}
//var person = {name: "Annyeong", age: 25, favoriteColor: "blue"};
//console.log(values(person));

function keys(obj){
    //create keys array 
    var keys = [];
    //loop through obj using each
    each(obj, function(value, key){
        if(obj.hasOwnProperty(key)){
            keys.push(key)
        }
    });
    //return array
    return keys;
}


var person = {name: "Annyeong", age: 25, favoriteColor: "blue"};
console.log(keys(person));
