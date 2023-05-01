// Faça um programa para calcular o valor de uma viagem

// Você terá 5 variáveis, sendo elas:

// 1- Preço da gasolina
// 2/Gasto médio de combustivel do carro por KM
// 3- Distância em km da viagem.
//4- tipo de Combustivel
//5-preço do etanol

const precoAlcool= 5.79;
const precogasolina =6.66;
const kmPorLitros = 10;
const distanciaEmKm= 100;
const tipo='etanol';

if(tipo ==='etanol'){
    const litrosConsumidos=distanciaEmKm/kmPorLitros
    const valorGasto = litrosConsumidos*precoAlcool

    console.log(valorGasto.toFixed(2));

}else{
    const litrosConsumidos=distanciaEmKm/kmPorLitros
    const valorGasto = litrosConsumidos*precogasolina

    console.log(valorGasto.toFixed(2));
}





