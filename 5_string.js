const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a string a ser invertida: ', (str) => {
  let invertedStr = '';

  for(let i = str.length - 1; i >= 0; i--) {
    invertedStr += str[i];
  }

  console.log('String invertida:', invertedStr);
  rl.close();
});
