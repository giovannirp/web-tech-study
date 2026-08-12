let inputProduto = document.querySelector("#produto")
let btnForm = document.querySelector("#btn-form")
let lista = document.querySelector("#lista")
const btnSumirInput = document.querySelector("#btnSumirInput")
const btnMostarInput = document.querySelector("#btnMostrarInput")


btnForm.addEventListener("click", function(event){
    event.preventDefault();

    let valorLista = inputProduto.value;
    let templateHMTL = `<li>${valorLista}</li>`;
    console.log(valorLista);

    if(valorLista == ""){
        alert("Preencher o campo!")
        return false
    }

    lista.innerHTML += templateHMTL;

})

btnSumirInput.addEventListener("click", function(e) {
    e.preventDefault()

    inputProduto.classList.add("sumir-input")
    inputProduto.classList.remove("mostrar-input")
})

btnMostarInput.addEventListener("click", function(e) {
    e.preventDefault()

    inputProduto.classList.add("mostrar-input")
    inputProduto.classList.remove("sumir-input")

})