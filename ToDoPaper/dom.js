// Function takes itemsType argument (‘completed’, ‘not_completed’, ‘all’).
// It should delete all current items from the DOM and render items of an appropriate itemsType.

function viewTodoListDom(itemsType){
document.getElementById("todo-items").innerHTML= "";
let todoList = viewTodoList(itemsType) ;

		for(let i =0 ; i<todoList.length;i++){
		document.getElementById("todo-items").appendChild(addTodoToHtml(todoList[i]));
		 }
  }


// addTodoItemDom(todoItem: object)
// Add todoItem to the DOM. It should include the text and id as text fields 
// and a checkbox (for the completed field visualization).

 function addTodoItemDom(todoItem){
 	if(addTodoItem(todoItem)){
 		// extract field from radiobbutton dynamiccally
 		// document.getElementById('viewType').getElementsByTagName('input')
 		viewTodoListDom("all");		
 	}
 	else {
 		alert("Unable to add this invalid Todo item!");
 	}
 }


function addTodoToHtml(toDoItem){
	let div = document.createElement('div');
		div.className="todo";
		div.id = toDoItem.id;
	let todoHtml;	
	let checkBoxAttr = toDoItem.completed===true ? "checked" : "";
	let isCompleted = toDoItem.completed===true ? "disabled" : "enabled";
	let isCompletedcol = toDoItem.completed===true ? "#4CAF50" : "#e7e7e7";
	todoHtml = `<div class="w3-container">
	<button type="button" class="btn btn-info" data-toggle="collapse" style="width:600px;height:40px;background-color = ${isCompletedcol};" data-target="#demo${toDoItem.id}">To do item #${toDoItem.id} </button>
	<div id="demo${toDoItem.id}" class="collapse">
	</p>
	<b>Text:</b>
	</p>
    <textarea rows="4" cols="50" ${isCompleted}>${toDoItem.text}</textarea>	
    <div class="checkbox" ${isCompleted}>
  	<label><input type="checkbox" value="" ${checkBoxAttr}>Is Completed</label>
  	</div>
  	<button type="button" id="saveToDo" class="btn btn-info" ${isCompleted} style="width:70px;height:30px;background-color: #4CAF50;">Save</button>
  	<button type="button" id="deleteToDo" class="btn btn-info" ${isCompleted} style="width:70px;height:30px;background-color: #f44336;">Delete</button>
	</div></div></br></br>`
	
	div.innerHTML = todoHtml;
	return div;
}
  

   // editTodoItemDom(todoItemId: number, newText: string) 
   // It should replace the text of the item with the given todoItemId. 

   function editTodoItemDom(todoItemId, newText){
   	if(editTodoItem(todoItemId,newText)){
   		viewTodoListDom("all");	
   	}
   	else{
   		alert("Unable to update Todo item with invalid Todo Item ID or empty text!");
   	}
   }
   

// deleteTodoItemDom(todoItemId: number) 
// It should delete todoItem with the given todoItemId

function deleteTodoItemDom(todoItemId){
	if(deleteTodoItem(todoItemId)){
		// viewTodoListDom("all");	
		const list = document.getElementById('todo-items');
		// list.removeChild(event.target.parentElement.parentElement.parentElement);
		// list.removeChild(todoItemId);
		list.removeChild(document.getElementById(todoItemId));

	}
	else{
   		alert("Unable to delete a Todo Item with given id"+todoItemId);
   	}
}