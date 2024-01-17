console.log("Hello World!");

/*                                             **Variable**
Automatically
Using var
Using let
Using const

The var keyword was used in all JavaScript code from 1995 to 2015. Variable can be redeclared and updated. Global scope variable.
The let and const keywords were added to JavaScript in 2015. Variable cannot be redeclared but can be updated. Block scope variable
The const keyword should only be used in code written for older browsers. Variable cannot be redeclared or updated. Block scope variable
*/
a = 10;
var b = 5;
let c = "a";
const pi = 3.14;
let d;

console.log(a)
console.log(b)
console.log(c)
console.log(pi)
console.log(d) // Output:- undefined


//                                             **Datatype**



/* Data type- 1.Primitive 2.Non-primitive
Primitive:- Number,String,Boolean,Undefined,Null,Bigint,Symbol
Non-Primitive:- Object
*/

// 1. Number
let num = 5;
console.log(num)
console.log(typeof (num))

// 2. String
let str = "Hello World!";
console.log(str)
console.log(typeof (str))
str = str + 1234;
console.log((str))
console.log(typeof (str))

// 3. Boolean
let boolt = true;
let boolf = false;
console.log(boolt)
console.log(boolf)
console.log(typeof(boolt))
console.log(typeof(boolf))

// 4. Undefined
let un;
console.log(un)
console.log(typeof (un))
 
// 5. NULL
let nul = null;
console.log(nul)
console.log(typeof (nul))

// 6. Bigint
let x = BigInt("123456789012345678901234567890");
console.log(x)
console.log(typeof (x))

// 7. Symbol
let sm = Symbol("123456789012345678901234567890");
console.log(sm)
console.log(typeof (sm))

// 8. Object
let obj = {
    fullname: "Subhasish Pramanick",
    ph: 123456789,
    pass: true
}

console.log(obj);
console.log(obj["fullname"]);
console.log(obj["ph"]);
console.log(obj["pass"]);



//                                           **Operator**





// Operator:- 1.Arithmetic 2.Assignment 3.Comparison 4.String 5.Logical 6.Bitwise 7.Ternary 8.Type
 
/* 1. Arithmetic Operator
+--> Addition, - --> Substraction, *--> Multiplication, /--> Division, %-->Modulas,
**--> Exponential, ++ -->Increment, -- -->Decrement */

let num1 = 15, num2 = 10;
console.log("num1+num2= ", num1 + num2);
console.log("num1-num2= ", num1 - num2);
console.log("num1*num2= ", num1 * num2);
console.log("num1/num2= ", num1 / num2);
console.log("num1**num2= ", num1 ** num2);
console.log("num1%num2= ", num1 % num2);

/* 2. Comparison Operator
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
*/
if (num1 == num2) {
    console.log("Num1==Num2");
}else {
    console.log("Num1==Num2 not");   
}
if (num1 != num2) {
    console.log("Num1!=Num2");
}else {
    console.log("Num1!=Num2 not");   
}
if (num1 > num2) {
    console.log("Num1>Num2");
} else {
    console.log("Num1>Num2 not");
}

if (num1 < num2) {
    console.log("Num1<Num2");
}else {
    console.log("Num1<Num2 not");   
}

/* 3. Logical Operator
&&	logical and
||	logical or
!	logical not
*/
if (num1 > 10 && num2 > 10) {
    console.log("Num1 & Num2 >10")
}
else {
    console.log("Num1 & Num2 is not >10")
}
if (num1 > 10 || num2 > 10) {
    console.log("Num1 || Num2 >10")
}
else {
    console.log("Num1 || Num2 is not >10")
}

/* Assignment Operator
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
*/


//                    **IF ElSE Statement**

/*
 1. if(condition){
    statement;
}

2. if(condition){
    statement;
}else{
    statement;
}

3. if(condition){
    statement;
}elseif(condition){
    statement;
}
else{
    statement;
}
*/

//                      **switch Statement**

/*
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/


//                        **Loop Statement**

// 1. For loop 2. For in 3. For Of 4. While 5. Do While

/* 
for(initialization;condition;increment/decrement operator)
{
    statement;
}
*/


/*
for(key in obj){
    statement;
}
*/

/*
while(condition){
    statement;
    increament/decreamnet operator
}
*/

/*
do{
    statement;
}while(condition);
*/

//                                       **Array**

/* Creating Array: const array_name = [item1, item2, ...];*/

//                                       **Function**
/* 
function Function_name(parameter){
    code
}
*/

//                                **Window Object**


/* Window object is a global object with lots of properties and methods.
 It is a browser's object automatically created by browser.(not javascript's). */

 console.log("Hello world");
 window.console.log("Hello World !!");



//                                      **DOM**

/* DOM:- Document Object Model
When we attached js with html the whole html code converted to a js object.
This special type of object is known as document. We can access this html file in js.
Document is basically a model Which represent html code.

window(Bowser's Object)-->Document(Object)-->Html-->1.Head(Meta tags, Title) 2.Body
*/


// For check Document Properties
console.dir(window.document);
console.log(window.document);
console.log(document.body);
console.dir(document.body);
console.dir(document.head);
console.log(document.head);
/* Console.log help us to print object.
Console.dir help us to print special type of object's(like document)property and methods.
*/


/* Dom manipulation 
1. Selecting with ID --> document.getElementById("Id name");
2. Selecting with class --> document.getElementsByClassName("Class Name");
3. Selecting with ID --> document.getElementsByTagName("Tag name");
*/



