// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta, e a escolha da condição de pagamento. 
// Utilize o codigo da tabela a seguit para ler qual a condição de pagamento e efetue o pagamento adequado. 

// Código de verificação de pagamento:
// 1- À visualViewport, débito, recebe % de desconto 
// 2- À vista , no dinhero ou devicePixelRatio, recebe % de desconto;
// 3-Em duas veses, preço norma,, de etiqueta sem juros;
// 4-Acima de duas vezes, pteço normal de etiqueta com juros de 10%

const precoEtiqueta= 100;
const formaDePagamento=1;

if(formaDePagamento===1){
    
    console.log('Você deve pagar ', precoEtiqueta-(precoEtiqueta * 0.1) )
}else if(formaDePagamento===2){
    console.log('Você deve pagar ', precoEtiqueta-(precoEtiqueta * 0.15) )
}else if(formaDePagamento===3){
    console.log('Você deve pagar ', precoEtiqueta)
}else{
    console.log('Você deve pagar ', precoEtiqueta+(precoEtiqueta * 0.1) )
}
