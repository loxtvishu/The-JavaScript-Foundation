// Q:1:- Pridict the Output

let a = 10;

// {
//     console.log(a);
// }

// Q:2:- Pridict the Output

// a = 100;

// {
//     console.log(a);
//     let a = 50;
// }

// Q:3:- Pridict the Output

// let x;

// if (x) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

// Q:4:- Pridict the Output

a = "false";

// if (a) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }

// Q:5:- Pridict the Output

a = "0";

// if (a == false) {
//     console.log("Match");
// }

// Q:5:- Pridict the Output

a = "5";
let b = 5;

// if (a == b) {
//     console.log("Equal");
// } else {
//     console.log("Not Equal");
// }
// console.log(a === b);

/*
                       ====> Intermediate (Loops + Scope + Hoisting) <========
 */


//Q:1:- Pridict the Output

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// console.log(i);   // error ----> i is not defined.

//Q:2:- Pridict the Output

let i = 100;

for (let i = 0; i < 2; i++) {
    console.log(i);
}

console.log(i);   // yha pr i =100 hoga bcz of global scope.




/*
            ====> 🔴 LEVEL 4 — Intermediate → Advanced (Coercion + Math.random + Logic) <======
*/


//Q:1:- Pridict the Output

let num = Math.floor(Math.random() * 10);
console.log(num);
console.log(num > 5);

//Q:2:- Pridict the Output

console.log("5" - 2);  // 3
console.log("5" + 2);  // 52
console.log("5" * 2);  // 10
console.log("5" / 2);  //2.5

//Q:3:- Pridict the Output

a = 0;

if (a == false) {
    console.log("A");
}

if (a === false) {
    console.log("B");
}

//Q:4:- Pridict the Output

a = "0";
b = 0;
let c = false;

if (a == b && b == c && a == c) {
    console.log("All Equal");
} else {
    console.log("Not Equal");
}

//Q:5:- Pridict the Output

a = 10;

{
    if (a == 10) {
        console.log("Outer A");
    }

    //   let a = 20;

    if (a == 20) {
        console.log("Inner A");
    }
}

//Q:6:- Pridict the Output

for (let i = 0; i < 3; i++) {

    if (i == false) {
        console.log("F");
    }

    if (i === false) {
        console.log("S");
    }
}

//Q:6:- Pridict the Output

a = null;

if (a == undefined && a == false) {
    console.log("Confusing");
} else {
    console.log("Safe");
}