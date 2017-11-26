
const fs = require('fs');
fs.unlinkSync('output.txt'); 
const e = require('os').EOL;

console.log("Starting..."); 

fs.readFile("student.json",'utf-8',function (error,data){
if (error) throw error;
     const parsed = JSON.parse(data);
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

rl.question('how many teams ', (n) => {              //here the i/o operation happened.
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

console.log("\nhello");   //after completion of this i/o operation executed

});



