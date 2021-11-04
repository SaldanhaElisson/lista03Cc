// Função responsavel pela operação algebrica
function whatIsMoreValue(){
    let maiorValor = 0;
    let menorValor;
    let elementDom = document.querySelector('.resultado');
   for(i = 0; i < 10; i++){
    calcularIdade(getInputTextValue(`number${i}`))
   }
    
    
    elementDom.innerHTML = `<p> O maior valor é: ${maiorValor} e o menor é: ${menorValor}`
}

function calcularIdade(dataCandidato){
    
    // pegar data atual
    const date = new Date
    const years = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    //pegar data do aniversario do candidato
    const dataSeparada = dataCandidato.split('-')
    const anoCandidato =  Number(dataSeparada[0])
    const mesCandidato = Number(dataSeparada[1])
    const diaCandidato = Number(dataSeparada[2])

    console.log(month)
    console.log(mesCandidato)
   
    // fazer calculo de idade
    let idade = years - anoCandidato

    console.log(idade)

    //verificar se já fez aniversario
    console.log(jaFezAniversario(diaCandidato, mesCandidato, day, month))
    if(!jaFezAniversario(diaCandidato, mesCandidato, day, month)){
        idade = idade-1
    }
    console.log(idade)
}

function jaFezAniversario(diaAniversario, mesAniversario, dia, mes){
    return diaAniversario <= dia && mesAniversario <= mes   
}

//reponsavel em pegar os valores 
function getInputTextValue(id){
    return document.getElementById(id).value
}

//quando clicar no botao, vai executar a funão whatIsMoreValue
document.querySelector('button').addEventListener('click', (e) =>{
    e.preventDefault
    whatIsMoreValue()
})

// pegar valor ok
// verificar se todos os campos estão preenchidos
// fazer com todos as 10° pessoas
    // fazer o calculo da idade
        // pegar a data do ano e diminuir ok
        // depois vai compara o mês e a o dia, se for verdade o candidato já fez aniversário e vai a idade como resultado da diminuição ok
        // se não, o candidato ainda não fez aniversario e vai pegar o valor e diminuir por 1 ok
        // colocar em uma variavel resultado
// mostrar na tela
// comparar  o e dizer a pessoa que tem o menor valor e o maior ( já feito na primeira questão)