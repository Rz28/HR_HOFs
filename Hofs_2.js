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
// 1)
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

// var person = {name: "Annyeong", age: 25, favoriteColor: "blue"};
// console.log(keys(person));

// 2)
// input: obj and a number 
// output: new obj with only key/value pairs whose keys are longer than the number argument

function keysLongerThan(obj, num){
    //create new obj keysValueLongerThan 
    var keysValueLongerThan = {};
    //iterate over the obj using filter
    each(obj, function(value,key){
        //if key length is longer that num argument
        if(key.length > num){
            // obj[key] = key
            keysValueLongerThan[key] = value;
        }
    });
    //return obj
    return keysValueLongerThan;
}

// console.log(keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 3));
// console.log(keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 4));

// 3)
// input: obj
// output: obj with all numeric values incremented by one

function incrementValues(obj){
    //declare new obj increasedValues
    var increasedValues = {};
    //loop through the obj with each
    each(obj, function(num, key){
        //if prop is number
        if(typeof num === 'number'){
            // increase the prop value by 1
            increasedValues[key] = num + 1;
        } else{
            increasedValues[key] = num;
        }
    });
    //return obj
    return increasedValues;
}
// console.log(incrementValues({name: "Annyeong", age: 25, favoriteColor: "blue"}));


// Exercises - Filter

function filter(coll, predicate){
    if(Array.isArray(coll)){
        var acc = [];
        each(coll, function(element, index){
            if(predicate(element)){
                acc.push(element);
            }
        });
    } else {
        acc = {};
        each(coll, function(prop, key){
            if(predicate(prop)){
               acc[key] = prop;
            }
        });
    }
    return acc;
}

// Basic Requirements
// 1)
// input: array of numbers
// output: array of only even numbers

function evens(numbers){
  //filter through numbers
  return numbers.filter(function(num){
      //determine if element is eve
      return num % 2 === 0;
  });
}

// console.log(evens([2,3,4,5,11,12]));

// 2)
// input: array of numbers
// output: array of only numbers multiples of 3

function multiplesOfThree(numbers) {
    //filter through the numbers
    return numbers.filter(function(num){
        //determine if num is multiple of 3
        return num % 3 === 0;
    });
}
//console.log(multiplesOfThree([1,3,4,12,9,34,24,30]))

// 4)
// input: array of numbers
// output: array of only positive numbers

function positives(numbers){
    return numbers.filter(function(num){
        return num > 0;
    });
}
//console.log(positives([-1,2,-4,-6, 10]))

// 5)
// input: array of string
// output: array of only strings with an even length

function evenLength(numbers){
    return numbers.filter(function(string){
        return string.length % 2 === 0;
    });
}

//console.log(evenLength(['test', 'ten', 'one', 'four', 'five']))

// More Practice
// 4)

// console.log(filter({a: 1, b: "dog", c: true}, function(value) {
//     return typeof value === "number";
//   }));

