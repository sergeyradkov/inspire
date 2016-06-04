app.controller('TodoController', function(TodoService){
	var tc = this;
	
	tc.todos = TodoService.getTodos();
	
	tc.addTask = function (newTask) {
		debugger
	    TodoService.addTask(newTask);
		tc.newTask = '';
	};
	
	tc.delTask = function(task){
		
		if(task.done){
			TodoService.deleteTask(task);
		}
		else {
			task.done = true;
		}
		
	};
})
app.service('TodoService', function($q, $http){
	var t = localStorage.getItem('todo');
	var todos;
	if(t){
		todos = JSON.parse(t);
	} else{
		todos = [];
	}
		
	this.getTodos =  function(){
		return todos;
	}
	
	this.saveTodos =  function(todos){
		localStorage.setItem('todo', JSON.stringify(todos));
		console.log('Todo Data Saved:', todos);
	}
	
	this.addTask = function(task){
		todos.push(task);
		this.saveTodos(todos);
	}
	this.deleteTask = function(index){
		todos.splice(index,1);
		this.saveTodos(todos);
	}
})