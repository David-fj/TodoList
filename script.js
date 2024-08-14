const inputAdd = document.querySelector(".inputTodoList");
const buttonInput = document.querySelector(".buttonInput")
const section = document.querySelector(".atividadesContainer")
let list = []
buttonInput.addEventListener('click', () => {
    section.innerHTML += `
    <div class="atividadeContainer">
        <input type="checkbox" onchange="check(${list.length})">
        <p>${String(inputAdd.value)}</p>
        <button onclick="edit(${list.length})" class="buttonEdit"><img src="imagens/edit_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"></button>
        <button onclick="" class="buttonTrash"><img src="imagens/delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"></button>
    </div>` 
    list = document.querySelectorAll(".atividadeContainer")
})

function check(i) {
    list[i].classList.toggle("checkStyle")
    console.log("foi");
}

function edit(i) {
    inputAdd.value = String(list[i].children[1].innerHTML)
}