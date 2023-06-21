const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// let sum = 0;
// let n = 5;
// let response;
// while (n > 0) {
//     
// n--;
// }

const addNumbers = function(n, sum) {
  if (n > 0) {
    reader.question(`Enter a number: `, (res) => {
              response = res;
              console.log(`You gave us ${res}.`)
              sum += parseInt(response);
              console.log(`The new total sum is ${sum}.`);
              addNumbers(n-1,sum);
    });
  } else {
    reader.close();
  }
}


addNumbers(5,0)



// const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let sum = 0;
// let n = 5;

// async function fun() {
//   while (n > 0) {
//     const response = await new Promise(resolve => {
//       reader.question(`Enter a number: `, resolve);
//     });
//     console.log(`You gave us ${response}.`);
//     sum += parseInt(response);
//     console.log(`The new total sum is ${sum}.`);
//     n--;
//   }
//   reader.close();
// }

// fun().catch(err => console.error(err));
