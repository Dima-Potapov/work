'use strict';

var number = 5;
var string = 2;
var sym = 3.14;
var boolean = true;
null
undefined;
var obj = {}; 

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let persone = {
    name: "Jone",
    age: 25,
    isMarried: false
}

console.log(persone["name"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[2]);

//alert("Hello World!")

//let answer = confirm("Are you here?");

//let answer = +prompt ("Есть ли вам 18", "Yes")
//console.log(typeof(answer)); 

let incr = 10,
    decr = 10;

/*incr++;
decr--;*/

console.log(incr++);
console.log(decr--);

console.log(5%2);
console.log("2" === 2);

let isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);