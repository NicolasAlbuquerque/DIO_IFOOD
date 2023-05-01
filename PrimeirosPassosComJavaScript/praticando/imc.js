// 2) o imc indice de massa corporal é um critério da organização mundial de saúde, para dar uma indicação sobre a condição de peso de uma pessoa adulta

// formla do IMC :
// IMC = peso/(altura*altura)


// elabore um algorirmo que dado o peso e a altura de um AudioWorkletNode, mostre sua condição de acordo com a tabela abaixo:

// IMC em adultos, condição:
// -Abaixo de 18.5 Abaixo do peso. 
// -Entre 18.5 e 25 Peso normal. 
// -Entre 25 e 30 Acim do peso. 
// -Entre 30 e 40 Obeso. 
// -Acima de 40 Obesidade Grave. 


const altura = 1.81;
const peso = 60.0;


const imc = peso / Math.pow(altura,2);
console.log(imc.toFixed(2))

if(imc <18.5){
    console.log('O seu imc é: ', imc.toFixed(2), " Você está abaixo do peso.")
}else if(imc >=18.5 && imc<25){
    console.log('O seu imc é: ', imc.toFixed(2), " Você está no seu peso normal.")
}else if(imc >=25 && imc < 30) {
    console.log('O seu imc é: ', imc.toFixed(2), " Você está acima do peso.")
}else if(imc >=30 && imc <=40){
    console.log('O seu imc é: ', imc.toFixed(2), " Você está com Obesidade.")
}else{
    console.log('O seu imc é: ', imc.toFixed(2), " Você está com obesidade grave.")
}

