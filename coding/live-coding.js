// 1. Primitives vs objects


// var obj = {
//   a: 1,
//   b: 2
// }

// var obj1 = obj;

// obj1.c = 123;
// obj.a = 3


// console.log('object', obj)
// console.log('obj1', obj1)

// var a = 3;
// var b = a;

// a = 2;

// console.log('a', a)
// console.log('b', b)



// 2. Function declaration and Function expression


// function foo(){
//   console.log('I am called!')
// }

// var a = function(){
//   console.log('I am called too!')
// }

// a();

// (function(){
//   console.log('I am called also!')
// })()


// 3. Floating point error


// var num = 0.1 + 0.2;
// var num = 0.2 + 0.2;
// console.log(num)



// 3. Arrays and Loops


// var arr = [1, 2, 3, 'aa', 'b', 4, 5]
// arr.splice(0, 1)
// console.log(arr)

// var a = [1, 'as', {}]
// for (var i = 0; i< a.length; i ++){
//   var val = a[i];
//     // do something

// }

// if (a.length > 3){
// do something
// }



// 4. Timing events

// var interval = setInterval(function(){
//   console.log(Math.random())
// }, 1500)

// var timeout = setTimeout(function(){
//   clearTimeout(interval);
//   clearTimeout(timeout);
// }, 7000);



// 5. Hoisting


// e = 4;

// var a = 3;

// var b = foo();

// var c = d();

// var d = function (){
// 	return 'I am c';
// }

// function foo(){
// 	return 'I am foo'
// }

// function boo(v){
// 	x = 6;
// 	v = 5;
// }

// var e



// 6. Scope
// Analyze the scope


// var i = 5;

// for(var i = 1; i<= 10; i++){
//   //do something
// }
// console.log(i)

// {
//     var inBlock = 5;
// }

// var a = 1;
// b = 5

// var c;

// var d = function (x){

//   var a = 5;
//   b = 25
//   c = 6
// }

// d();



// 7. This,
// Overriding 'this'


// var car = {
//     speed: 20,
//     accelerate: function(){
//         this.speed ++;
//     }
// }

// car.accelerate();
// console.log(car.speed);

// var th = {speed: 100};
// car.accelerate.call(th);
// console.log(th.speed);

// var newAccelerate = car.accelerate.bind(th);
// newAccelerate();
// console.log(th.speed);



// 8. Prototype
// Create a method on Array that pushes an element 2 times into the calling array


// Array.prototype.pushTwice = function (elem){
//   this.push(elem);
//   this.push(elem);
// }

// var a = [];
// a.pushTwice(0);
//  console.log(a);



// 9. Closures
// Create a function factory that create functions which log 'happy birthday' to a specific person and are called with a number argument representing the age;


// function makeHBFunction(name){
//   return function(age){
//     return 'Happy birthday ' + name + 'for the age of ' + age;
//   }
// }

// var sayHBToGigi = makeHBFunction('GIGI');
// var sayHBToAlex = makeHBFunction('Alex');

// sayHBToGigi(30)
// sayHBToAlex(30)
