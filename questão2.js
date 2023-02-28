const numero = parseInt(prompt("Escolha um número:"));
let penultimo = 0;
let ultimo = 1;
let fibonacci = 0;

while (fibonacci < numero) {
  fibonacci = penultimo + ultimo;
  penultimo = ultimo;
  ultimo = fibonacci;
  if (fibonacci == numero) {
    alert(`${numero} está dentro da sequência de Fibonacci`);
  } else if (fibonacci > numero) {
    alert(`${numero} não está dentro da sequência de Fibonacci`);
  } else {
    alert(fibonacci);
  }
}
