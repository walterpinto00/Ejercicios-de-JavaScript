let varUno = 10;
let varDos = 30;

console.log("Antes: varUno vale " + varUno + ", varDos vale " + varDos);

let temporal = varUno;
varUno = varDos;
varDos = temporal;

console.log("Al final: varUno vale " + varUno + ", varDos vale " + varDos);