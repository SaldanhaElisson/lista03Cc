// Função responsavel pela operação algebrica
function whatIsMoreValue(){
    let maiorValor = 0;
    let menorValor;
    let elementDom = document.querySelector('.resultado');
    let resultado = [];
    elementDom.innerHTML = ``
    
   for(i = 0; i < 10; i++){
       let pessoa = getInputTextValue(`number${i}`)
        //validar campos
        if(pessoa === ''){
            alert(`Pessoa ${i+1}° sem data`)
            return
        }

       let idade =  calcularIdade(pessoa)

       // validar idade
       if(idade <= 0 ){ 
            alert(`Pessoa ${i}° com idade invalida`)
            return
        }

        resultado.push(idade)
        elementDom.innerHTML += `<p> Pessoa ${i} ° tem ${resultado[i]} anos </p> `
   }
    
   
}

function calcularIdade(dataCandidato){
    
    // pegar data atual
    const date = new Date
    const years = date.getFullYear()
    const month = date.getMonth() 
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

    

    //verificar se já fez aniversario
    console.log(!jaFezAniversario(diaCandidato, mesCandidato, day, month))
    if(!jaFezAniversario(diaCandidato, mesCandidato, day, month)){
        idade = idade-1
    }
    console.log(idade)
    return idade
}

function jaFezAniversario(diaAniversario, mesAniversario, dia, mes){
    return mesAniversario <= mes + 1 || diaAniversario <= dia 
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

// pegar valor (ok)
// verificar se todos os campos estão preenchidos (ok)
// fazer com todos as 10° pessoas (ok)
    // função responsavel em fazer calculo da idade o calculo da idade (ok)
        // pegar a data do ano e diminuir ok
        // depois vai compara o mês e a o dia, se for verdade o candidato já fez aniversário e vai a idade como resultado da diminuição (ok)
        // se não, o candidato ainda não fez aniversario e vai pegar o valor e diminuir por 1 (ok)
        // função validar idade (ok)
            // se a idade for menor ou igual a zero o candidato não existe (ok)
        // colocar em uma variavel resultado (ok)
// mostrar na tela 


// comparar  o e dizer a pessoa que tem o menor valor e o maior ( já feito na primeira questão)