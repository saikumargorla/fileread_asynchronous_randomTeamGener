
const fs = require('fs');
fs.unlinkSync('output.txt');
let rawdata = fs.readFileSync('student.json'); 
const e = require('os').EOL;

const file = require("fs");
console.log("Starting..."); 

file.readFile("student.json",
        function (error,data){
     
});
 
let parsed = JSON.parse(rawdata);
let arr = [];
for(var x in parsed.students){
arr.push(parsed.students[x].Name);

}
let shuffle = require('shuffle-array');
shuffle(arr);
console.log(arr);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('how many teams ', (n) => {              //here the input/output function hitted.
  console.log(`the number of teams: ${n}`);

  rl.close();

let b = []
let k = 1;
let bigin = 0
while(arr.length > n){
let slice = require('array-slice');

 b = arr.slice(bigin,n);
console.log(`${k} team`);

fs.appendFile('output.txt',`${k} team :${b} ${e}`, function (err) {
  if (err) throw err;
});
k++;
console.log(b);
arr.splice(bigin,n);

}
console.log(`the ${k} team`);
console.log(arr);
fs.appendFile('output.txt', `\n${k} team :${arr}`, function (err) {
  if (err) throw err;
});

});
console.log("\nhello");   //after completion of this input/output function executed







