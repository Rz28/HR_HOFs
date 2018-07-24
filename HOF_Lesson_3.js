function each(array, func){
    for(var i = 0; i < array.length; i++){
        func(array[i], i);
    }
}
//input: array, transformation funciton
// output: modified array where transformation has been applied to each element
function map(array){
    //declare acc as empty []
    var acc = [];
    //loop through array using each
    each(array, function(element, i){
       acc.push(transform(element, i));
    });
    return acc;
}


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
//console.log(makeEven(numbers));
// function makeEven(array){
//     //lop through array using map
//     return map(array, function(number){
//         if(number % 2 === 1){
//             return number + 1;
//         } else {
//             return number;
//         }
//     });
// }


// // inputs: array of numbers
// // outpus: new array of numbers where each element is squared
// // function squareElement(arr){
// //   //declare acc as empty array
// //   var acc = [];
// //   //loop through the array
// //   for(var i = 0; i < arr.length; i++){
// //       //push to acc element * element
// //       var ele = arr[i];
// //       acc.push(ele * ele);
// //   }
// //   return acc;
// // }

// function squareElement(arr){
//     var acc = [];
//     each(arr, function(ele){
//         acc.push(ele * ele);
//     });
//     return acc;
// }

// //input: array and transformer
// //output: new array (array with transformation applied)
// function map(arr, transformer){
//   var acc = [];
//   each(arr, function(element, i){
//       //push to acc transformed element
//     acc.push(transformer(element, i));
// });
//   return acc;
// }

// function squaredElement(arr){
//     //return the new array created by map
//    return map(arr, function(ele){
//         return ele* ele;
//     });
// }

// console.log(squaredElement([1,2,3]));