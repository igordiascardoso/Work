const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite um número para verificar se pertence a sequência de fibonacci: ", (num) => {
  fibonacci(num);
  rl.close();
});

function fibonacci(num) {
  let a = 0,
    b = 1,
    c;

  if (num === a || num === b) {
    console.log(num + " pertence à sequência de Fibonacci.");
    return;
  }

  while (b <= num) {
    c = a + b;
    a = b;
    b = c;
    if (num === b) {
      console.log(num + " pertence à sequência de Fibonacci.");
      return;
    }
  }

  console.log(num + " não pertence à sequência de Fibonacci.");
}
