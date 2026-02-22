/* 
         VARIABLE HOISTING PROBLEM SET (NO SOLUTIONS)
         STRICT RULES: No loops, No conditions, No functions, No arrays, No objects

*/

// Q1:
console.log(a);  // Undefined
var a = 10;


// Q2:
console.log(b); // Error bcz of TDZ
let b = 5;


// Q3:
console.log(c);   // Error Bcz of TDZ
const c = 8;


// Q4:
var d = 1;
console.log(d);   // 1


// Q5:
console.log(e);  // Refference Error Bcz of e is not defined  
e = 20;


// Q6:
console.log(f);  // Undefined    
var f;


// Q7:
g = 50;
console.log(g);  // 50
var g;


// Q8:
console.log(h);  // Undefined
var h = h;


// Q9:
console.log(i);   // Undefined
i = i;
var i;


// Q10:
var j = 5;
console.log(j);  // Output ==> 5
var j;


// Q11:
console.log(k);    // Reffrence Error Bcz of TDZ 
let k;
k = 12;


// Q12:
var l;
console.log(l);  // Output - Undefined
l = 40;


// Q13:
console.log(m);  // Output ===> Reference Error
m = 60;
let m;


// Q14:
console.log(n);  // Output ==> Undefined 
var n = 2 * n;


// Q15:
var o = o;
console.log(o);  // Output ==> Undefined


// Q16:
p = 10;
console.log(p);  // Output ==> Declaration Error


// Q17:
console.log(q);  // Output ==> Undefined
var q = q + 5;


// Q18:
console.log(r);  // Output ==> Reference Error 
let r = r + 1;


// Q19:
var s;
console.log(s + 10);  // Output ==> NaN


// Q20:
console.log(t);  // Output ==> Undefiend
var t = 0;
t = t + 1;

//Q21:
let x = 5;
{
    let x = 10;
}
console.log(x);  // Output ==> 5

//Q22:
let ab = "5" - 2;
console.log(ab); // Output ==> 3


//Q23:
console.log(2 + "2" + 2);  // Output ==> 222

//Q24:
let ac = 5;
ac++;
++ac;
console.log(ac); // Output ==> 7

//Q25:-
console.log(NaN === NaN);  // Output ==> False

//Q26:-
console.log(typeof undefined == typeof null);  // Output ==> False 

//Q27 :-
Boolean("false")

//Q28 :-
console.log("5" * "2");  // Output ==> NaN


/*

            Basic Operators (Arithmetic, Assignment, Increment, Decrement,Comparison, Logical, Bitwise) Assignment Problem Set (NO SOLUTIONS)
            STRICT RULES: No loops, No conditions, No functions, No arrays, No objects

 */


//Q29:  Perform all the arithmetic operations on 
a = 10, b = 3.

console.log(`${a + b}`);
console.log(`${a - b}`);
console.log(`${a * b}`);
console.log(`${a / b}`);
console.log(`${a % b}`);


//Q30:  Perform all the assignment operations on 
x = 5;
x = x + 3;
log(x); // Output ==> 8
x += 3;
log(x); // Output ==> 11
x -= 2;
log(x); // Output ==> 9
x *= 2;
log(x); // Output ==> 18
x /= 3;
log(x); // Output ==> 6

//Q31:  Perform all the increment and decrement operations on
let count = 5;
log(count); // Output ==> 5
count++
log(count); // Output ==> 6 
count--;
log(count); // Output ==> 5


//Q32:Compare two values: 5 == “5” and 5 === “5”.

console.log(5 == "5");  // Output ==> True
console.log(5 === "5"); // Output ==> False

//Q33:Check if 10 is greater than 5, less than 20, and equal to 10.

if (10 > 5 && 10 < 20 && 10 === 10) {
    console.log("All conditions are met.");
} else {
    console.log("Some conditions are not met.");
}

//Q34:Try logical AND and OR:
console.log(true && false);  // Output ==> False
console.log(true || false);  // Output ==> True
console.log(!(true));        // Output ==> False

//Q35:Predict the result of:
console.log((5 > 3 && 10 > 8)); // Output ==> True
console.log((5 > 3 || 10 < 8)); // Output ==> True

//Q36:Bitwise (light intro): Evaluate 5 & 1 and 5 | 1.

console.log(5 & 1);  // Output ==> 1
console.log(5 | 1);  // Output ==> 5



/*                               =====> Variable Hoisting in JavaScript <====== */

//Q.1 : Predict output of:
console.log(a);
var a = 10;    // Output ==> Undefined

//Q.2 :  Predict output of:
console.log(td);
 let td = 10 // Output ==> Reference Error Bcz of TDZ

 //Q.3 : Predict output of:
 test()
function test() { console.log("Hello") }  // Output ==> Hello

