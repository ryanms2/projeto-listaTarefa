const tarefa = document.getElementById("icaixa");
const inputAdicionar = document.getElementById("adicionar");
const box2 = document.getElementById("box2");
if (tarefa.value == '') {
    //alert("Inválido! Adicione uma tarefa.")
} else {
    
}
let arrayTarefas = []

function adicionarTarefa() {
    if (tarefa.value == '') {
        alert("Inválido! Adicione uma tarefa.")
    } else {
       arrayTarefas.push({
        tarefa: tarefa.value,
        concluida: false
    });
    mostrarTarefas() 
    }    
}

function mostrarTarefas() {
    let novaDiv = ''
    arrayTarefas.forEach((item, posicao) => {
        novaDiv = novaDiv + `
        <div class="div-tarefas">
            <input type="submit" class="material-icons" name="check" id="icheck" onclick="mudar(${posicao})" value="check">
            <p class="${item.concluida && "para"}">${item.tarefa}</p>
            <span class="material-icons" id="remove" onclick="removerTarefa(${posicao})">delete</span>
        </div>`
        
    })
    box2.innerHTML = novaDiv
    tarefa.value = '' 
    localStorage.setItem('lista', JSON.stringify(arrayTarefas))
}

function removerTarefa(posicao) {
    arrayTarefas.splice(posicao, 1)
    mostrarTarefas()
    
}
function mudar(posicao) {
    arrayTarefas[posicao].concluida = !arrayTarefas[posicao].concluida
    mostrarTarefas()
}
function recarregarTarefas() {
    const tarefasLocalStorage = localStorage.getItem('lista')
    if (tarefasLocalStorage) {
        arrayTarefas = JSON.parse(tarefasLocalStorage)
    }
    
    mostrarTarefas()
}

function deleteAll() {
    
    const tarefasLocalStorage = localStorage.removeItem("lista")
    arrayTarefas = []
    box2.innerHTML = ''
    
}

recarregarTarefas()

inputAdicionar.addEventListener("click", adicionarTarefa)






        /* <div class="div-tarefas">
            <input type="checkbox" name="check" id="icheck">
            <p></p>
            <span class="material-icons">delete</span>
        </div> */