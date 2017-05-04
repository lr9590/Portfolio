var todoList = {
  todos: [],
  // displayTodos: function () {
  //   if (this.todos.length === 0) {
  //     console.log('Your todo list is empty');
  //   } else {
  //     console.log("My Todos:");
  //     for (var i = 0; i < this.todos.length; i++){
  //       if (this.todos[i].completed === true) {
  //           console.log('(x)', this.todos[i].todoText);
  //       } else {
  //           console.log('( )', this.todos[i].todoText);
  //       }
  //     }
  //   }
  // },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completed todos.
    // for (var i = 0; i < totalTodos; i++) {
    //   if (this.todos[i].completed === true) {
    //     completedTodos++;
    //   }
    // }
    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });




    //if everything true make everything false
    // if (completedTodos === totalTodos) {
    //   // for (var i = 0; i < totalTodos; i++) {
    //   //   this.todos[i].completed = false;
    //   // }
    //   this.todos.forEach(function(todo) {
    //     todo.completed = false;
    //   });
    //
    //
    //   // Otherwise make everything true.
    // } else {
    //   // for (var i = 0; i < totalTodos; i++) {
    //   //   this.todos[i].completed = true;
    //   // }
    //   this.todos.forEach(function(todo) {
    //     todo.completed = true;
    //   });
    // }
    this.todos.forEach(function(todo) {
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
  }
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};


// objektas kuris rodo tik ka kas daro ekrane..
var view = {
  displayTodos: function() {
    var todosUL = document.querySelector('ul');
    todosUL.innerHTML = '';
    // for (var i= 0; i < todoList.todos.length; i++) {
    //   var todoLi = document.createElement('li');
    //   var todo = todoList.todos[i];
    //   var todoTextWithCompletion = '';
    //
    //   if(todo.completed === true) {
    //     todoTextWithCompletion = '(x)' + todo.todoText;
    //   } else {
    //     todoTextWithCompletion = '()' + todo.todoText;
    //   }
    //
    //   todoLi.id = i;
    //   todoLi.textContent = todoTextWithCompletion;
    //   todoLi.appendChild(this.createDeleteButton());
    //   todosUL.appendChild(todoLi);
    // }


    todoList.todos.forEach(function(todo, position){
        var todoLi = document.createElement('li');
        var todoTextWithCompletion = '';

        if(todo.completed === true) {
          todoTextWithCompletion = '(x)' + todo.todoText;
        } else {
          todoTextWithCompletion = '()' + todo.todoText;
        }

        todoLi.id = position;
        todoLi.textContent = todoTextWithCompletion;
        todoLi.appendChild(this.createDeleteButton());
        todosUL.appendChild(todoLi);

    }, this);
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUL = document.querySelector('ul');

    todosUL.addEventListener('click', function(event) {
      console.log(event.target.parentNode.id);

      var elementClicked = event.target;

      if (elementClicked.className === 'deleteButton') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();
