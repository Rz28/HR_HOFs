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

//creating functions using each()

//input: array of numbers
// output: return the sum of the square of the elements
function sumSquares(numbers){
	var total = 0;
    //iterate over numbers array
    each(numbers, function(el){
    	total += el * el;
    });
      //add square the element to total 
	return total;
}

sumSquares([1,2,3,4]);
function assertEqual(actual, expected, nameTest){
	if(actual === expected){
		console.log('passed');
	}else{
		console.log('FAILED ', nameTest, ' Expected ', expected, ' but got ', actual);
	}
}



function sumCubes(numbers){
	//initialize our total
	var total = 0; 
	//iterate over the numbers array
	each(numbers, function(el){
		total += cube(el);
	});
	  //add the cube of the element to the total

	return total;

}

function cube(x) {
  return x * x * x;
}

// input: array of numbers
// output: calculate product of array

function product(numbers){
  //calculate product of array
	for(var i = 0; i < numbers.length; i++){
      //return product;
	  numbers[i] * numbers[i];
	}
}

