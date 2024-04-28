const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const completeList = document.querySelector('.list-task')

let ToDoList = []



function AddNewTask() {
    ToDoList.push({
        task: input.value,
        finish: false
    })

    input.value = ''

    showTask()
}

function showTask(){

    let newLi = ''

    ToDoList.forEach((item, index) => {

        newLi = newLi + `
            <li class="task ${item.finish && "done"}" >
                <img src="./images/checked.png" alt="check-na-tarefa" onclick="finishTask(${index})">
                <p>${item.task}</p>
                <img src="./images/trash.png" alt="tarefa-lixo" onclick="deletarItem(${index})">
            </li>`


    })

    completeList.innerHTML = newLi

    localStorage.setItem('list', JSON.stringify(ToDoList))

}

function finishTask(index){
    ToDoList[index].finish = !ToDoList[index].finish

    showTask()
}

function deletarItem(index){

    ToDoList.splice(index, 1)

    showTask()

}

function reloadItems(){
    const localStorageTask = localStorage.getItem('list')


    if  (localStorageTask){
    ToDoList = JSON.parse(localStorageTask)
    }
    
    showTask()
}

reloadItems()

button.addEventListener('click', AddNewTask )