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