function calcularConsumo() {
 
  const litros = prompt("Num de litros:");
  const kilometros = prompt("Num de kilómetros:");

  
  const total = Number(litros) / Number(kilometros);

console.log("Has consumido " + total.toFixed(2) + " l/km");
}

calcularConsumo();