const inputAdd = document.querySelector(".inputTodoList");
const buttonInput = document.querySelector(".buttonInput")
const section = document.querySelector(".atividadesContainer")
let list = []

let editVar = false;
let indice = 0;

init()

function init(){
    let respostaAPI = 
    [
        {"id": 1, "descricao": "Atv 1"},
        {"id": 2, "descricao": "Atv 2"},
        {"id": 3, "descricao": "Atv 3"}
    ]
    carregarLista(respostaAPI)
}

function carregarLista(api) {
    for(let i = 0; i < api.length;i++) {
        section.innerHTML += `
        <div class="atividadeContainer">
            <input type="checkbox">
            <p>${api[i].descricao}</p>
            <button onclick="edit(${i})" class="buttonEdit"><img src="imagens/edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"></button>
            <button onclick="" class="buttonTrash"><img src="imagens/delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"></button>
        </div>
        `
        const temp = document.querySelectorAll(".atividadeContainer")
        list.push(temp[list.length])
    }
}

buttonInput.addEventListener('click', () => {
    if(editVar) {
        let img = "imagens/add_24dp_5F6368_FILL0_wght400_GRAD0_opsz24 (1).svg"
        console.log(indice)
        list[indice].children[1].innerHTML = inputAdd.value
        buttonInput.children[0].src = img;
        editVar = false
    } else {
        section.innerHTML += `
        <div class="atividadeContainer">
            <input type="checkbox">
            <p>${String(inputAdd.value)}</p>
            <button onclick="edit(${list.length})" class="buttonEdit"><img src="imagens/edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"></button>
            <button onclick="" class="buttonTrash"><img src="imagens/delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"></button>
        </div>`
        const temp = document.querySelectorAll(".atividadeContainer")
        list.push(temp[list.length])
    }
})

function edit(i) {
    console.log(list[i].children[1])
    inputAdd.value = String(list[i].children[1].innerHTML)
    buttonInput.children[0].src = "imagens/edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
    editVar = true;
    indice = i;
}