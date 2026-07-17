function calcularMedia() {
  const n1 = prompt("Ingresa el primer número:");
  const n2 = prompt("Ingresa el segundo número:");
  const n3 = prompt("Ingresa el tercer número:");

  // Validación 
  if (!n1 || !n2 || !n3) {
    console.log("Faltaron números por ingresar.");
  } else {
    const media = parseInt(Number(n1) + Number(n2) + Number(n3)) / 3;
    console.log("La media de los números es " + media + ".");
  }
}

calcularMedia();