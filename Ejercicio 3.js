function pedirNombre() {
  const nombre = prompt("Escribe tu nombre:");
  if (nombre === null || nombre.trim() === "") {
    console.log("No ingresaste ningún nombre.");
  } else {
    console.log("Hola " + nombre);
  }
}

pedirNombre();