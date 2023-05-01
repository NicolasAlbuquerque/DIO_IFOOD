// 1-) Faa um algoritmo que dado as 3 notas tiradas por um aluno em umsemestre da faculdade, calcule sua media e sua classificação conforme a tabela abaixo.

// Media = (nota1 + nota2 + nota3)/3

// Classificação
// -media menor que 5, reprovado;
// -media entre 5 e 7 , recuperação;
// -média acima de 7, passou de semestre


const nota1=5 ,nota2= 10 ,nota3=3;

const media= (nota1+nota2+nota3)/3;

if(media < 5){
    console.log('Media: ',media, 'Você está reprovado')
}else if (media >=5 && media.toFixed(2) <=7){
    console.log('Media: ',media.toFixed(2), 'Você está de recuperação' )
}else{
    console.log('Media: ',media.toFixed(2), 'Você está Aprovado' )
}