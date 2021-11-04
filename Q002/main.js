// função responsavel pela operação algebrica
function fatorial(){
    let valorInicial = getInputNumberValue('number0');
    let resultado = valorInicial
    let elementDom = document.querySelector('.resultado');
    for(let i = 1; i < valorInicial; i++){
        resultado = resultado * (valorInicial - i)
    }
    elementDom.innerHTML = `<p> O valor do fatorial é : ${resultado} </p>`
}

//reponsavel em pegar os valores 
function getInputNumberValue(id){
    return Number(document.getElementById(id).value)
}

// quando clicar no botão vai executar a função fatorial()
document.querySelector('button').addEventListener('click', (e) =>{
    e.preventDefault
    fatorial()
})