function each(collectionOfData, callbackFunction){
	if(Array.isArray(collectionOfData)){
		for(var i = 0; i < collectionOfData.length; i++){
			callbackFunction(collectionOfData[i], i, collectionOfData);
		}
	} else {
		for(var key in collectionOfData){
			callbackFunction(collectionOfData[key], key, collectionOfData);
		}
	}
}
//converted function decleration to function expression
var cube = function (x){
    return x * x * x;
}

var fullname = function(first, last){
  return first + ' ' + last;

}

const power = function(base, exp){
    if(exp === 0){
        return 1;
    }
    return base * power(base, exp - 1);
}

var sumCubes = function(numbers){
    var total = 0; 
    for(var i = 0; i < numbers.length; i++){
        total = total + cube(numbers[i]);
        console.log(total);
    }
    return total;
}

//1) Write each

function each(collectionOfData, callbackFunction){
	if(Array.isArray(collectionOfData)){
		for(var i = 0; i < collectionOfData.length; i++){
			callbackFunction(collectionOfData[i], i, collectionOfData);
		}
	} else {
		for(var key in collectionOfData){
			callbackFunction(collectionOfData[key], key, collectionOfData);
		}
	}
}

//2 sumSquare using each()
function sumSquares(numbers){
    var total = 0;
    each(numbers,function(el){
        total += el * el; 
    });
    return total;
}

//console.log(sumSquares([1,2,3]));

//3 rewrite sumCubes using each

function sumCubes(numbers){
    var total = 0;
    each(numbers, function(el){
        total = total + cube(el);
    });
    return total;
}
//console.log(sumCubes([1,2,3])); --> 36

//4) Write function called product that calculates product of an array of numbers using for loop,
// then, refactor it to use each

// function product(numbers){
//     //initialize the product to 1
//     var product = 1; 
//     //loop through the array of numbers
//     for(var i = 0; i < numbers.length; i++){
//         //make total be the total times the current element in array
//         product = product * numbers[i];
//     }
//     //return total product
//     return product;
// }

function product(numbers){
    var product = 1;
    each(numbers, function(el){
        product = product * el;
    });
    return product;
}

// 5) write function cubeAll that cubes each number in array, and returns array of all numbers cubed 
//using for loop,
//then, refactor it to use each

// input: array of numbers
// output: array of cubed numbers from input array

// function cubeAll(numbers){
//     //create empty cubedArray
//     var cubedArray = [];
//     //iterate over the numbers array
//     for(var i = 0; i < numbers.length; i++){
//         //push the cubed element, here we used our cube()
//         cubedArray.push(cube(numbers[i]));
//     }
//     //return cubedArray of numbers
//     return cubedArray;
// }
//refactor using each() 
function cubeAll(numbers){
    //create empty cubedArray
    var cubedArray = []
    //iterate over numbers array using each()
    each(numbers, function(el){
        //push each cubed element into cubedArray
        cubedArray.push(cube(el));
    });
    //return cubedArray
    return cubedArray;
}

// 6) write funciton odds that takes an array as parameter and returns an array of just the odd numbers

// input: array of numbers
// output: returns array of odd numbers from input array

function odds(numbers){
    //create oddArray
    var oddArray = [];
    //iterate over the array of numbers using each()
    each(numbers, function(el){
        //if the element in array is odd
        if(el % 2 !== 0){
            //push element into oddArray
            oddArray.push(el);
        }
    });
    //return oddArray
    return oddArray;
}

// Summations - More Practice 
//1)
// input: array of numbers
// output: sum of all elements multiplied by four

function sumByAllElementsMultipliedByFour(numbers){
    //initialize sum
    var sum = 0;
    //iterate over number array using each()
    each(numbers, function(el){
        //sum equals the sum of all elements multiplied by 4
        sum += el * 4;
    });
    //return sum
    return sum;
}

//2)
// inputs: array of numbers and a function
// outputs: compute the sum of the array (may take multiple functions)
//sumBy(numbers, cube);
var cube = function (num){
    return num * num * num;
}

var square = function(num){
    return num * num;
}

function sumBy(numbers, f){
  //initialize a variable at 0
  var sum = 0;
  //iterate over array using each and get square of element
  each(numbers, function(el){
      //add to the sum
      sum += f(el);
  });
  //return sum
  return sum;
}

//var numbers = [1,2,3,4];
// console.log(sumBy(numbers, square)); 
// console.log(sumBy(numbers, cube));
// console.log(sumBy(numbers, function(number){
//     return number * 4;
// }));

//4)
// input: array of numbers
// output: product of numbers

function productBy(numbers){
    var product = 1;
    //loop through the array of numbers using each()
    each(numbers, function(el){
        //add the product of the element to product variable
        product *= el;
    });
    //return product
    return product;
}
//console.log(productBy([1,2,3,4]));

//Advanced
//1)
// input: array of numbers
// output: array of numbers (numbers must be doubled)
function doubleAll(numbers){
    //create a new array
    var double = [];
    //loop through each element in array
    each(numbers, function(el){
        //push the double element into array
        double.push(el + el);
    });
    //return array
    return double;
}
//console.log(doubleAll([2,3,5,10, 7]));

//2)
// input: array numbers
// output: array of numbers halved (devided by two)
function halveAll(numbers){
    var halved = [];
    //loop through elements using each()
    each(numbers, function(el){
        //push ele devided by 2
        halved.push(el / 2);
    });
    //return halved array
    return halved;
}
//console.log(halveAll([4,10,15,50]));

//3
// input: array of strings
// output: array of string transformed to upper case
function uppercaseAll(arr){
    //create new array toUpperCase
    var stringsToUpperCase = [];
    //iterate over each string in array
    each(arr, function(string){
        //convert el to uppercase and push to array
        stringsToUpperCase.push(string.toUpperCase());
    });
    //return array
    return stringsToUpperCase;
}
//console.log(uppercaseAll(['hello', 'string', 'my test']));

//5
// input: two parameters: array and a function ()
// output: array of all elements in the input array transformed using the input function

function map(array, f){
    //create var for transformed array
    var transformed = [];
    //loop through the element
    each(array, function(element, index){
        //push the value from the parameter function (f) to transformed array
        transformed.push(f(element));
    });
    //return transformed array
    return transformed;
}

// console.log(map([1,2,3,4], function(x){
//     return x * 2;
// }));

//6
// 1)
// input: map(['hello', 'world'], ???)
// output: array of words transformed to upperCase
// console.log(map(['hello', 'world'], function(ele){
//     return ele.toUpperCase();
// }));

// 2)
// console.log(map(['HelLo', 'WorLD'], function(element){
//     return element.toLowerCase();
// }));

// 3)
// console.log(map(['the', 'quick', 'brown', 'fox', 'jumped'], function(element){
//     return element.length;
// }));

// 4)
var people = [
    {name: 'Alyssa P. Hacker', age: 26},
    {name: 'Ben Bitdiddle', age: 34},
    {name: 'Eva Lu Ator', age: 19},
    {name: 'Lem E. Tweakit', age: 40}
];

// console.log(map(people, function(person){
//     return person.name;
// }));

// 5
// console.log(map(people, function(person){
//     return `${person.name} is ${person.age}`;
// }));

// Finding Patterns: Filtering

// 1)
// input: array of numbers
// output: array of even numbers

function evens(numbers){
    //create emmpty array of evenNumbers
    var isEven = []
    //loop through array of numbers
    each(numbers, function(num){
        //determine if number is even
        if(num % 2 === 0){
            //push to array 
            isEven.push(num);
        }
    });
    //return evenNumbers
    return isEven;
}

// console.log(evens([2,4,6,10,11]));

// 2)
//intput: array of numbers
// output: returns array of only numbers multiples of 3

function multiplesOfThree(numbers){
    //create empty array isMultiplesOfThree
    var isMultiplesOfThree = [];
    //loop through the numbers array
    each(numbers, function(num){
        //determine if element is multiple of three
        if(num % 3 === 0){
            //push element into array
            isMultiplesOfThree.push(num);
        }
    });
    //return array
    return isMultiplesOfThree
}
//console.log(multiplesOfThree([1,3,4,5,6,10,9,32,21]))

// 3)
// input: array of numbers
// output: array of only positive numbers

function positives(numbers){
    //create isPositive empty array
    var isPositive = [];
    //loop through array of numbers
    each(numbers, function(num){
        //determine if num is positive
        if(num > 0){
          //push num into isPositive array
          isPositive.push(num);
        }
    });
    //return array
    return isPositive;
}
//console.log(positives([-1,2,-3,-9,10,0]))

// 4)
// input: array of strings
// output: array of string with an even length

function evenLength(arr){
    //create isEvenLength empty array
    var isEvenLength = [];
    //loop through the string array
    each(arr, function(string){
        //if the string leght is even
        if(string.length % 2 === 0){
            //push the string to array
            isEvenLength.push(string);
        }
    });
    //return isEvenLength
    return isEvenLength;
}

//console.log(evenLength(['test','the','four', 'ten', 'something']))

// 5)
// input: two parameters: array and function (when invoked with an argument, returns true or false)
// output: return New array of only elements which the function returns true


function filter(coll, f){
    //create true accu
    var isTrue = [];
    each(coll, function(element, index ){
        if(f(element) === true){
            isTrue.push(element);
        }
    });
    return isTrue;
}

// console.log(filter([1,2,3,4], function(x){
//     return x % 2 === 0;
// }));

// 6) use filter to write/rewrite
// 1)
// input: array of numbers
// output: filtered array with odd numbers

// console.log(filter([1,2,3,4,5], function(x){
//     return x % 2 === 1;
// }));

// console.log(filter([-2,4,-10,3,5,6], function(x){
//     return x > 0;
// }));

// console.log(filter([0,-4,3,-1,10,-3], function(x){
//     return x < 0;
// }));

// console.log(filter(['hello', 'width', 'why', 'test'], function(string){
//     return string.length % 2 === 0;
// }));

// console.log(filter([4, 2, 6, 10, 11, 42, -1, 2], function(num){
//     return num > 6;
// }));

// 7)
// input: two parameters (array of string, and a character)
// output: array of ONLY the strings that start with the character

function startsWithChar(string, char){
  //use filter to determine if string starts with char
  return filter(string, function(char){
      return char.startsWith(char);
  });
}

var words = "the quick brown fox jumps over the lazy dog".split(" ");
console.log(startsWithChar(words, "q")); // => ["quick"]
startsWithChar(words, "t"); // => ["the", "the"]
var test = 0;
