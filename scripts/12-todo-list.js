const todoList = [

  { name: 'make dinner', dueDate: '2022-12-22' },
  { name: 'wash dishes', dueDate: '2022-10-11' }
];
renderTodoList();
function renderTodoList() {

  let todoListHTML = '';

todoList.forEach((todoObject,index)=>{
    const {name,dueDate}=todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${index},1);
    renderTodoList()
    " class="delete-button js-delete-todo-button">Delete</button>
    
    `; //generating the html
    todoListHTML += html;

})
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


document.querySelector('.js-add-todo-button').addEventListener('click',()=>{addTodo();});
document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton,index)=>{
  deleteButton.addEventListener('click',()=>{
    todoList.splice(index,1);
    renderTodoList();
  })

})

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement=document.querySelector('.js-dueDate-input');
  const dueDate=dateInputElement.value;
  todoList.push({name,dueDate}); //pot sa pun o singura data de obicei pui name:name,dueDate:dueDate
  inputElement.value = '';
  renderTodoList();
}

