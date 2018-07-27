//REDUCE
function each(coll, f){
    if(Array.isArray(coll)){
        for(var i = 0; i < coll.length; i++){
            f(coll[i], i, coll);
        }
    }else {
        for(var key in coll){
            f(coll[key], key, coll);
        }
    }
}
function reduce(array, f, start) {
    var acc = start;
    each(array, function(element) {
      acc = f(acc, element);
    });
    return acc;
  }

function sum(numbers){
    return reduce(numbers, function(total, num){
        return total + num;
    }, 0);
}

function everyNumberEven(numbers){
    return reduce(numbers, function(result, num){
        return result && num % 2 === 0;
    }, true);
}

// console.log(everyNumberEven([1,3,4,5]));

//Basic Requirements
// 1)
// input: array of numbers
// output: product of numbers in array
function product(numbers) {
    return reduce(numbers, function(total, number) {
      return total * number;
    },1);
  }

//console.log(product([1,3,4]))

// 2)
//input
var people = [
    {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
    {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
    {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
    {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
    {name: {first: "Louis", last: "Reasoner"}, age: 21}
  ];


  function averageAge(people) {
    // First you'll need to compute the sum of all the ages
    return reduce(people, function(total, person){
        // Second, divide the sum by the number of people (people.length)
        return total + person.age / people.length;
    },0);
  }
  //console.log(averageAge(people))

  // 3)
  function range(start, end) {
    var acc = [];
    for (var i = start; i < end; i++) {
      acc.push(i);
    }
    return acc;
  }
//console.log(range(3, 7))
  // input: two numbers as arguments
  // output: factorial of number

  function factorial(n){
    if(n < 0){
        return 1;
    }
    return reduce(n, function(start, n){
        return start * range(start, n - 1);
    });
  }
  console.log(factorial(5))