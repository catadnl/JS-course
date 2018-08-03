//1.Math and Numbers


// 1.1 Log 10 times the max between a random in [0, 100] and the rounded up to its nearest integer value of PI ^ 3

// for(var i = 0; i < 9; i++){
//   var rand = Math.floor( Math.random() * 100) + 1
//   var cubedPi = Math.round(Math.pow(Math.PI, 3))
//   console.log(Math.max(rand, cubedPi))
// }


//2. String

// 2.1 Create a function which checks if a string parameter contains string parameter.
// If so, extract it and return the string, else replace first letters from the 1st parameter with the 2nd parameter and return the new string

// function findOrAdd(text, textToFind){
//   var indexFound = text.indexOf(textToFind);
//   if(indexFound > -1){
//     var extracted = text.substring(indexFound, indexFound + textToFind.length)
//     return extracted
//   }
//   else {
//     var textToReplace = text.substring(0, textToFind.length)
//     var changedText = text.replace(textToReplace, textToFind)
//     return changedText
//   }
// }

// console.log(findOrAdd('ts is the coolest prog lang?', 'js'))


//3. Regular expressions

// 3.1 create a function that checks if an string argument verifies a mail pattern

// var emailRegExp = /([a-z]+)@[a-z]+\.([a-z]+)/;
// var testStr = 'catalin@esol.com';
// var testStr1 = 'catalin@@esol.com';

// console.log(emailRegExp.test(testStr));
// console.log(emailRegExp.test(testStr1));
// console.log(testStr.match(emailRegExp));
// console.log(testStr1.match(emailRegExp));


//4. Array

// 4.1 Return the sum of the cubed value of the odd numbers from an array with LOOPS and functionally

// var arr = [1, 2, 3, 4, 5 ,6 ,7 ,8 ,9 ,10]

// var sum = arr
// .filter(function(elem){return elem%2 !== 0})
// .map(function(elem){return Math.pow(elem, 3)})
// .reduce(function(previous, elem){ return previous + elem}, 0);

// console.log(sum)


//4.2 return the year of only dates after current date time

// var dates = [new Date("2015-03-25"), new Date("2017-12-25"), new Date("2017-03-25"),new Date("2018-03-25"), new Date("2016-03-25")]

// var currentDate = new Date();
// for(var i  = 0 ; i <= dates.length; i++){
//   if(currentDate < dates[i]){
//     console.log(dates[i].getFullYear());
//   }
// }

// dates
  // .filter(function(date){ return currentDate < date;})
  // .map(function(date){return date.getFullYear()})
  // .forEach(function(date){console.log(date)})


//5 operations with distinct data types

// console.log('1' + 1)
// console.log(true + 1)
// console.log(false * 10)
// console.log('10' * 10)
// console.log([1]* 10)
// console.log([] + 6)
// console.log({} + 6)
// console.log([21, 2] + 1)
// console.log([12, 2] * 6)
// console.log('asdasd' * 6)
// console.log({0: 1} * 6)
// console.log({0: 1} + 6)

// console.log(typeof '')
// console.log(typeof 5)
// console.log(typeof true)

// console.log(typeof new String())

// console.log(typeof NaN)
// console.log(typeof Infinity)

// console.log(typeof [])
// console.log(typeof {})
// console.log(typeof Math)

// console.log(typeof undefined)
// console.log(typeof aaaaa)
// console.log(typeof null)

// var a = function(){};
// console.log(typeof a);
// console.log(typeof function(){})




// console.log('' == false)
// console.log(0 == false)
// console.log('0' == false)

// console.log(['0'] == false)
// console.log([0] == false)
// console.log([] == false)
// console.log(null == false)
// console.log(undefined == false)
// console.log(NaN == false)

// console.log(null == undefined)
// console.log(NaN == NaN)

// console.log(![])
// console.log(!{})
// console.log(!5)
// console.log(!0)
// console.log(!'')
// console.log(!' ')
// console.log(!null)
// console.log(!undefined)

// console.log('' || 4)
// console.log('' || null)
// console.log('' || null || 'asd')
// console.log('' || 'asd' || 'alt')
// console.log('' &&  4)
// console.log(8 && null)
// console.log(1 && 2 && 3)
