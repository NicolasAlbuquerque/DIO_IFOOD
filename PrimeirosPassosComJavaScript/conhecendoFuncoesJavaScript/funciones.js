function calcularIMC(peso,altura){
    return peso / Math.pow(altura,2);
}

function classificarImc(imc){
    console.log(imc.toFixed(2))
if(imc <18.5){
    return "Você está abaixo do peso."
}else if(imc >=18.5 && imc<25){
    return "Você está no seu peso normal."
}else if(imc >=25 && imc < 30) {
    return "Você está acima do peso."
}else if(imc >=30 && imc <=40){
    return "Você está com Obesidade."
}else{
    return "Você está com obesidade grave."
}
}

function main(){

    const altura = 1.81;
    const peso = 60.0;


    const imc = calcularIMC(peso,altura)
    console.log(classificarImc(imc))
}

main();
console.log(main); // vai me indicar no console que Main é uma function




//          função imediatamente invocada. não  precisa ser chamada, ela é autoeExecutavel
(function (){

    const altura = 1.81;
    const peso = 60.0;


    const imc = calcularIMC(peso,altura)
    console.log(classificarImc(imc))
})();

