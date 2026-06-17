const campo = document.querySelector("#campo");
const salvarBtn = document.querySelector("#salvar");

// Adicionar evento clique no botão salvar
salvarBtn.addEventListener("click", function(event) {
    event.preventDefault();
    const valor = campo.value;

    if (valor.trim() === "") {
        alert("Campo obrigatório");
        return;
    }

    // salvar no Localstorage
    const chave = `ValorSalvo_${Date.now()}`;
    localStorage.setItem(chave, valor);

    // Limpar campo após salvar
    campo.value = "";
});