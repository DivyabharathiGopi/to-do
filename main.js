const input = document.getElementById('todo');
const mybutton = document.getElementById('addtodo');
const todoList = document.getElementById('addlist');

function addTodo(){
    const text = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const mytext = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const checkBox = document.createElement('input');

    checkBox.type='checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(mytext);
    listItem.appendChild(deleteBtn);

    mytext.textContent = text;
    deleteBtn.textContent='Delete';

    todoList.appendChild(listItem);

    deleteBtn.addEventListener('click',function(){
        todoList.removeChild((listItem));
    })

    checkBox.addEventListener('change',function(){
        listItem.classList.add('container2');
    })

    
}

mybutton.addEventListener('click',addTodo);