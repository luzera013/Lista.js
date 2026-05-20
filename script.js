const btn = document.querySelector("#btnAdicionar")
const inputTexto = document.querySelector("#inputTexto")
const lista = document.querySelector("#filmes")

let filmes = ["Filme1", "Filme2", "Filme3"]
// filmes.unshift("Filme4")
// filmes[0] = "Filme4"
// console.log(filmes)

btn.addEventListener("click", function clicar(){
    let texto = inputTexto.value;
    inputTexto.value = ""

    filmes.push(texto)

    renderizarLista()
})

function renderizarLista(){
    lista.innerHTML = ""
    filmes.forEach(function pegarFilmes(elementoAtual,indice){
        let filmesLista = document.createElement("li")
        filmesLista.textContent = elementoAtual
        lista.append(filmesLista)

        let btnAtualizar = document.createElement("button")
        btnAtualizar.textContent = "editar"
        btn.addEventListener("click", atualizar())
        filmesLista.append(btnAtualizar)
    })

}

function atualizar(){

}

function deletar(){

}

renderizarLista()
