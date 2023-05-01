// function teste ()  {}  sintaxe
//função: pequeno trecho de código, que conseguimos invocar em outros locais do códgo, podendo ser executado varias vezes. trazendo dinamismo; Aceitam parametros

function teste ()  {
    console.log('teste')
}

teste();//chamando a function, executando


function sayMyName(name){
    console.log('your name is: ' + name)
}

sayMyName('bicha')


function quadrado (valor){
    return valor*valor;
}

const quadradoDe10 = quadrado(10);
console.log(quadradoDe10)

console.log(quadrado(10)+quadrado(10))


function incrementarJuros(valor,percentJuros){
    const valorDeAcrescimo = (percentJuros/100) * valor
    return valor+valorDeAcrescimo;
}


console.log(100,10);
console.log(100,15);
console.log(100,20);


function main(){}//sera a função principal, as outras vão dentro dela.




