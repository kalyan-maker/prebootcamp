const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin

});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);

});
inp.on("close", () => {
    //start-here
    var sum = 0;
    for (i = 0; i < 3; i = i + 1) {

        something = userInput[i].split(" ");

        for (j = 0; j < 3; j++) {
            sum = sum + +something[j];
        }
    }
});

//to take integer value and print integer value

const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin

});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);

});
inp.on("close", () => {
    //start-here
    var add = userInput[0]
    console.log(add);
    //end-here});
});

//A single line contains integers separated by space , Print the integer list of integers separated by space

const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin

});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);

});
inp.on("close", () => {
    //start-here
    var add = userInput[0]

    console.log(add);
    //end-here});
});

//First-line indicates two integers which are the size of array and 'K' value. Second-line indicates an integer contains elements of an array. , Print the taken input in the same format.

const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin

});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);

});
inp.on("close", () => {
    //start-here
    var add = userInput[0]
    var add1 = userInput[1]
    console.log(add);
    console.log(add1);
    //end-here});
});

//First-line indicates two integers separated by space. Second-line indicates two integers separated by space. Third-line indicates two integers separated by space. Print the input in the same format.

const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin

});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);

});
inp.on("close", () => {
    //start-here
    var add = userInput[0]
    var add1 = userInput[1]
    var add2 = userInput[2]
    console.log(add);
    console.log(add1);
    console.log(add2)
        //end-here});
});

//Three integers are given in line by line. , Print the integers in a single line separate by space.

const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin

});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);

});
inp.on("close", () => {
    //start-here
    var add = userInput[0]
    var add1 = userInput[1]
    var add2 = userInput[2]

    var num = add + " " + add1 + " " + add2


    console.log(num);
    //end-here
});

//First-line indicates two integers separated by space. Second-line indicates three integers separated by space. Third-line indicates three integers separated by space, Print the input in the same format.

const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin

});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);

});
inp.on("close", () => {
    //start-here
    var add = userInput[0]
    var add1 = userInput[1]
    var add2 = userInput[2]

    console.log(add);
    console.log(add1);
    console.log(add2);
    //end-here});
});

//A single line contains a string. ,    Print the characters in a string separated by space.

const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin

});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);

});
inp.on("close", () => {
    //start-here
    var str = userInput[0].split("");
    var ss = [];
    for (var i = 0; i < str.length; i++) {

        ss.push(str[i])
    }
    console.log(ss.join(" "));
    //end-here});
});

//A single line contains three float values separated by space. / Print the float value separated by line.

const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin

});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);

});
inp.on("close", () => {
    //start-here
    var a = userInput[0].split(" ");

    console.log(a[0])
    console.log(a[1])
    console.log(a[2])

    //end-here});
});

//A single line contains a string. Print the characters in a string separated by line.

const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin

});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);

});
inp.on("close", () => {
    //start-here
    var str = userInput[0];
    for (var i = 0; i < str.length; i++) {

        console.log(str[i]);
    }
    //end-here});
});

//A single line contains a string., Print the characters in a string separated by comma.

const readline = require('readline');
const inp = readline.createInterface({
    input: process.stdin

});
const userInput = [];
inp.on("line", (data) => {
    userInput.push(data);

});
inp.on("close", () => {
    //start-here
    var str = userInput[0].split("");
    var ss = [];
    for (var i = 0; i < str.length; i++) {

        ss.push(str[i])
    }
    console.log(ss.join());
    //end-here});
});
