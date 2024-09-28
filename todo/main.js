let todoArray = [{name: 'Aral javascript', date: '2023-45-23'}]

renderToDoList()

function renderToDoList() {
    //Clears the DOM 
    const todoContainer = document.querySelector('.todo-el');
    todoContainer.innerHTML = '';
   
    todoArray.forEach((value, index) => {
        //Create a div to contain list, date and button
        let itemContainer = document.createElement('div')
        itemContainer.classList.add('item')
        let divToDo = document.createElement('div')
        let divDate = document.createElement('div')
        let delBtn = document.createElement('button')
      
        //Append array object  values to the html element
        divToDo.innerText = `${value.name}`
        divDate.innerText = `${value.date}`
        delBtn.innerText = 'Delete'
        delBtn.classList.add('del-btn')

        //listen for clicks and remote the [i] on array object
        delBtn.addEventListener('click', () => {
            todoArray.splice(index, 1)
            renderToDoList()
        })

        //append item and date to item container
        itemContainer.appendChild(divToDo)
        itemContainer.appendChild(divDate)
        itemContainer.appendChild(delBtn)
        
        //Display
        document.querySelector('.todo-el').appendChild(itemContainer)
    })
}

function addToDo() {
    const todoEl = document.querySelector('.input-el')
    const dateEl = document.querySelector('.date-el')
    
    const name = todoEl.value 
    const date = dateEl.value 

    //checks if the input and date has a value
    if (name && date) {
        todoArray.push({name: name, date: date})
        todoEl.value = '' 
        dateEl.value = ''
        renderToDoList()
    } else {
        alert('Invalid input. Please provide a value')
    }

   
}
