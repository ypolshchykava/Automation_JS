

 


  // Function takes itemsType argument (‘completed’, ‘not_completed’, ‘all’).
  // It should delete all current items from the DOM and render items of an appropriate itemsType. 
  function viewTodoListDom(itemsType){
  		document.getElementById("todo-items").innerHTML= "";
	// if(viewToDoList(itemsType)){
		let todoList = viewTodoList(itemsType) ;

		 for(let i =0 ; i<todoList.length;i++){
		 document.getElementById("todo-items").appendChild(addTodoToHtml(todoList[i]));
		 }
	// }

  }


// addTodoItemDom(todoItem: object)
// Add todoItem to the DOM. It should include the text and id as text fields 
// and a checkbox (for the completed field visualization).
 function addTodoItemDom(todoItem){
 	if(addTodoItem(todoItem)){
 		viewTodoListDom("all");		
 	}
 	else {
 		alert("unable to add this item ID!");
 	}
 	
 }







  function addTodoToHtml(toDoItem){
	let div = document.createElement('div');
		div.className="todo";
		div.id = toDoItem.id;
	let todoHtml;	
	let checkBoxAttr = 	 toDoItem.completed===true ? "checked" : "";

   let isCompleted  = toDoItem.completed===true ? "green" : "red";
todoHtml = `<div class="w3-container">
	<button type="button" class="btn btn-info" data-toggle="collapse" style="width:600px;height:40px;" data-target="#demo${toDoItem.id}">To do item #${toDoItem.id} </button>
	<div id="demo${toDoItem.id}" class="collapse">
	</p>
	<b>Text:</b>
	</p>
    <textarea rows="4" cols="50">${toDoItem.text}</textarea>
    
   	
    <div class="checkbox">
  	<label><input type="checkbox" value="" ${checkBoxAttr}>Is Completed</label>
  	<div class="w3-panel w3-${isCompleted}" style="width:120px;height:20px;"> ${toDoItem.completed}</div>
	</div>
	
    
    
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
   		alert("unable to update with invalid todoItem ID  OR empty text!");
   	}
   	

   }


// It should delete todoItem with the given todoItemId
function deleteTodoItemDom(todoItemId){
	if(deleteTodoItem(todoItemId)){
		viewTodoListDom("all");	
	}
	else{
   		alert("unable delete with given id"+todoItemId);
   	}
   	

}




