let todoArray = [{name: 'Aral javascript', date: '2023-45-23'}]


function renderToDoList() {
    let htmlElement = ''
    todoArray.forEach((value, index) => {
        let html = `
        <div>${value.name}</div>
        <div>${value.date}</div>
        <button onclick="todoArray.splice(${index}, 1); renderToDoList()" class="del-btn">Delete</button>
        `
    
        htmlElement += html
    })
    
    document.querySelector('.todo-el') 
    .innerHTML = htmlElement
}

function addToDo() {
    const todoEl = document.querySelector('.input-el')
    const dateEl = document.querySelector('.date-el')
    
    const name = todoEl.value 
    const date = dateEl.value 

    todoArray.push({name: name, date: date})
    todoEl.value = '' 
    dateEl.value = ''
    renderToDoList()
}