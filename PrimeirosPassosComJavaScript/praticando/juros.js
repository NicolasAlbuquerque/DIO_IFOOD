// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta, e a escolha da condição de pagamento. 
// Utilize o codigo da tabela a seguit para ler qual a condição de pagamento e efetue o pagamento adequado. 

// Código de verificação de pagamento:
// 1- À visualViewport, débito, recebe % de desconto 
// 2- À vista , no dinhero ou devicePixelRatio, recebe % de desconto;
// 3-Em duas veses, preço norma,, de etiqueta sem juros;
// 4-Acima de duas vezes, pteço normal de etiqueta com juros de 10%


function aplicarDesconto(valor,desconto){
    return (valor - (valor*(desconto/100)));
}

function aplicarJuros(valor,juros){
    return (valor + (valor * (juros/100)))
}


const precoEtiqueta= 100;
const formaDePagamento=4;

if(formaDePagamento===1){
    
    console.log(aplicarDesconto(precoEtiqueta,10) )
}else if(formaDePagamento===2){
    console.log(aplicarDesconto(precoEtiqueta,15))
}else if(formaDePagamento===3){
    console.log(precoEtiqueta)
}else{
    console.log(aplicarJuros(precoEtiqueta,10))
}
