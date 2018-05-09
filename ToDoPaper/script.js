let todoItems = [];

let loadToDoItems = function () {
    $.getJSON("todos.json", function (data) {
        console.log(data);
        todoItems = data;
    }).done(function(){
		
			
			viewTodoListDom("all");			
			// editTodoItemDom(55,"fsdfs");  // negative
			addTodoItemDom({ "text": " NEW ITEM ADDED", "completed": true, "id": 3 });			
			// deleteTodoItemDom(22);  // negative
			

		});
};

loadToDoItems();