const comensales = prompt("Número de comensales:");
const numComensales = Number(comensales);

// 2. Calculamos los kilos de papa

const kilosPapas = (numComensales * 200) / 1000;

// 3. Calculamos el resto de ingredientes basados en los kilos de papa
const huevos = kilosPapas * 5;
const cebolla = kilosPapas * 300;

// 4. Imprimimos la receta final en la consola
console.log(`${numComensales} comensales`);
console.log("Se necesitará:");
console.log(`${kilosPapas} kg de papas`);
console.log(`${huevos} huevos`);
console.log(`${cebolla} gr de cebolla`);