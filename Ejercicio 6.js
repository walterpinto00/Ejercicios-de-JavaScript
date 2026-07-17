const horas = prompt("Horas:");
const minutos = prompt("Minutos:");


const totalSegundos = (Number(horas) * 60 * 60) + (Number(minutos) * 60);


console.log(`Resultado: ${horas}*60*60 + ${minutos}*60 = ${totalSegundos} segundos`);
