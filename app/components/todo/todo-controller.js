app.controller('TodoController', function(TodoService){
	var tc = this;
	
	tc.todos = TodoService.getTodos();
	// DO NOT EDIT ABOVE

	
	tc.addTask = function (newTask) {
	    TodoService.addTask(newTask);
		tc.newTask = '';
	};
	
	tc.delTask = function(index){
		TodoService.deleteTask(index)
	};
	
	
})