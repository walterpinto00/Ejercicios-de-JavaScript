const numero = prompt("27");

const decenas = Math.floor(Number(numero) / 10);
const unidades = Number(numero) % 10;


console.log(`Unidades: ${unidades}`);
console.log(`Decenas: ${decenas}`);