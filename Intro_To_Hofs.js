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

// inputs: array of numbers and a function
// outputs: compute the sum of the array (may take multiple functions)

function sumBy(numbers, func){

}

var numbers = [1,2,3,4];
//sumBy(numbers, square)
