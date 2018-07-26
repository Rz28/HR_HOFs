function each(coll, f){
    if(Array.isArray(coll)){
        for(var i = 0; i < coll.length; i++){
            f(coll[i], i);
      }
    }else {
        for(var key in coll){
            f(coll[key], key);
        }
    }
}
//input: array, transformation funciton
// output: modified array where transformation has been applied to each element
function map(array, f){
    //declare acc as empty []
    var acc = [];
    //loop through array using each
    each(array, function(element, i){
       acc.push(f(element, i));
    });
    return acc;
}

//Basic Requirements
// 1)

function ages(people){
    return map(people, function(person){
        return person.age;
    });
}

function firstNames(people){
    return map(people, function(person){
        return person.name.first;
    });
}

function lastNames(people){
    return map(people, function(person){
        return person.name.last;
    });
}

function fullNames(people){
    return map(people, function(person){
        if(person.name.middle){
            return `${person.name.first} ${person.name.middle} ${person.name.last}`;
        } else {
            return `${person.name.first} ${person.name.last}`
        }
        
    });
}
var people = [
    {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
    {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
    {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
    {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
    {name: {first: "Louis", last: "Reasoner"}, age: 21}
  ];

// console.log(fullNames(people));

// 2)
// This is how Math.abs() works
function abs(x) {
    if(x >= 0){
        return x;
    }
    return -x;
}
// console.log(map([1, -2, 37, -100, -8, 5], function(el){
//     return abs(el);
// }));

// 3)
// input: array of arrays of numbers
// output: new array containing maximum number of each inner array
// our argument would look like this:
var sampleInput = [ // it's an array
  [1, 3, 2], // of arrays of numbers
  [4, 23, 100],
  [7, 6, 3, -2]
];

// part 1 make a function max
// input: array of numbers
// output: maximum number in array
function max(numbers){
    //max number in array
    var maxNum = 0;
    //loop through array with each
    each(numbers, function(num){
        if(num > maxNum){
            maxNum = num;
        }
    });
    //return max number
    return maxNum;
}
//console.log(max([1,3,4]))// 4
// part 2 
// use map to transform each array in sampleInput into maximum by completing maximus function

function maximus(numbers) {
    return map(numbers, function(num, i){
        return max(num);
        // return Math.max(...num);
    });
}
//  console.log(maximus(sampleInput))// [3,100,7]


// More Practice
// 1) Complete funciton exponentials that accepts array of numbers as a parameter, and raises each n to the nth power
// input: array of numbers
// output: array of numbers raised to nth power

function exponentials(numbers) {
    //loop through array with maps
    return map(numbers, function(num){
        //The Math.pow() function returns the base to the exponent power, that is, baseexponent.
        return Math.pow(num, num);
    });
}
//console.log(exponentials([3,2,5]))

// 2) Create function reverse
// input: string as a parameter
// output: returns reversed version of input string
function reverse(string){
    //split string
    var splitstring = string.split('');
    console.log(splitstring)
    //initialize versedstring
    var reversed = [];
    //loop through the string
    for(var i = splitstring.length - 1; i >= 0; i--){
        //reverse each char
        reversed.push(splitstring[i])
    }
    //return reversedstring
    return reversed.join('');
}
//console.log(reverse('hello'))

// 2.a) Write function called reverseWords
// input: string of words
// ouput: string with all of its words reversed 

function reverseWords(string) {
    //split string into each word
    var newstring = string.split(' '); 
    console.log(newstring);
    //create variable to store reversed words
    var reversedWords = [];
    //loop through each word
    for(var i = 0; i < newstring.length; i++){
        //add reversed word to reversedWords variable
        reversedWords.push(reverse(newstring[i]));
    }
    //return reversed words.join()
    return reversedWords.join(' ');
}

//console.log(reverseWords('hello world'))


// 3) write function called pluck that :
// input: array of objects and a string representing a key
// output: return array of all values found under each obj using the key

function pluck(array, string){

    //loop through array using map
    return map(array, function(person){
        var name = person[string];
        console.log(name)
        //if string key is found in obj
        if(person[string]){
            //push obj[key] into empty array
            return person[string];
        }
    });
}
// console.log(pluck(people, 'age'));

// 4) Given a string representing a CVS (comma-separated values)
// input: string of CVS
// output: array of people objects with the exact format as below:
// var people = [
//     {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
//     {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
//     {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
//     {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
//     {name: {first: "Louis", last: "Reasoner"}, age: 21}
//   ];




// Exercises - Map Objects

function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function map(coll, f) {
    var acc = [];
    if (!Array.isArray(coll)) {
      acc = {};
    }
    each(coll, function(element, key) {
      acc[key] = f(element, key);
    });
    return acc;
  }


// 1)
// input: obj
// output: new obj with numeric values increased by 1
function incrementValues (obj){
    //map through the obj
    return map(obj, function(element, key){
        if(typeof element === 'number'){
            return element = element + 1;
        }
            return element;
    });
}
//
// 2)
// input: obj
// output: obj with string values to upperCase
function upperCaseValues(obj){
    //loop through obj with map
    return map(obj, function(value, key){
        //if value is string
        if(typeof value === 'string'){
            //change string to upperCase
            return value.toUpperCase();
        }else
          // return unchanged value
          return value;

    });
}
//console.log(upperCaseValues({name: "Annyeong", age: 25, favoriteColor: "blue"}));

// 3)
// input: obj whose values are also objects
// output: returns obj containing the count of keys in each nested obj
function countNestedKeys (obj){
    //initalize count
    var count = 0;
    //loop through obj with map
    return map(obj, function(value, key){
        //value of key should be number of value keys inside obj
        return value = Object.keys(value).length;
         //return value
    },);
}
console.log(countNestedKeys({a: {b: 1, c: 7}, f: {h: 22, g: 12, i: 24}}));
// => {a: 2, f: 3}



// input: take an aray of numbers
// output: array of all even numbers (if a number id ood, add one)

var numbers = [0, 32, 56, 33, 55, 45];
function makeEven(array){
    var acc = [];
    //loop through array using each
    each(array, function(number){
        //if element is odd
        if(number % 2 === 1){
            //add one and push to acc
            acc.push(number + 1);
        //else 
        } else {
            //push to acc
            acc.push(number);
        }
    });
    //return acc
    return acc;
}
