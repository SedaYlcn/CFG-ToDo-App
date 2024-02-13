     const todos = [];

     // {title: string, completed: boolean}

        function addTodo(){
            // select to the input element
            const inputTodoElement = document.querySelector('#inputToDo');
            // select its value aka the title
            const title = inputTodoElement.value;

            todos.push({title, completed: false});

            renderTodos();

            console.log(todos)
        
    }

        function renderTodos() {
          const todoListElements = document.querySelector('#todoList');

          todoListElements.innerHTML=""
        
        todos.forEach((todo, index) => {
            const listElement = document.createElement("li");
            listElement.innerHTML = `
             <p>${todo.title}<p>
             <p>${todo.completed ? "Completed" : "Pending"}<p>    
             <button type="button" onclick="deleteTodo(${index})">Delete</button>       
             <button type="button" onclick="toggleTodo(${index})">Toggle</button>       

            `;
        todoListElements.appendChild(listElement);

        });
    
  } 

  function deleteTodo (index) {
    todos.splice(index, 1)
    renderTodos()

}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;

    renderTodos()
}



// 3. Check if there is a value
// 4. If there is a value, create a new task