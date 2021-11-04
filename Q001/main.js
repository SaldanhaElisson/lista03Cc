// Função responsavel pela operação algebrica
function whatIsMoreValue(){
    let maiorValor = 0;
    let menorValor;
    let elementDom = document.querySelector('.resultado');
    for(let i = 0; i < 10; i++){
        let valorAtual = getInputNumberValue (`number${i}`)
        console.log(valorAtual)
        maiorValor = valorAtual >= maiorValor ? valorAtual: maiorValor;
        menorValor = valorAtual >= menorValor ? menorValor: valorAtual

    }
    elementDom.innerHTML = `<p> O maior valor é: ${maiorValor} e o menor é: ${menorValor}`
}

//reponsavel em pegar os valores 
function getInputNumberValue(id){
    return Number(document.getElementById(id).value)
}

//quando clicar no botao, vai executar a funão whatIsMoreValue
document.querySelector('button').addEventListener('click', (e) =>{
    e.preventDefault
    whatIsMoreValue()
})

