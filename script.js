const inputAdd = document.querySelector(".inputTodoList");
const buttonInput = document.querySelector(".buttonInput")
const section = document.querySelector(".atividadesContainer")
let list = []
buttonInput.addEventListener('click', () => {
    section.innerHTML += `
    <div class="atividadeContainer">
        <input type="checkbox">
        <p>${String(inputAdd.value)}</p>
        <button onclick="edit(${list.length})" class="buttonEdit"><img src="imagens/edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"></button>
        <button onclick="" class="buttonTrash"><img src="imagens/delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"></button>
    </div>`
    const temp = document.querySelectorAll(".atividadeContainer")
    list.push(temp[list.length])
})

function edit(i) {
    inputAdd.value = String(list[i].children[1].innerHTML)
}