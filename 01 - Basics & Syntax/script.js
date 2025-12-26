// ====================================================================
// VARIABLE HOISTING PROBLEM SET (NO SOLUTIONS)
// STRICT RULES: No loops, No conditions, No functions, No arrays, No objects
// ====================================================================


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

//Q27 :-
console.log("5" * "2");  // Output ==> NaN

