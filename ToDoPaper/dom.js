/**
 * It should delete all current items from the DOM and render items of an appropriate itemsType.
 * @param itemsType: ‘completed’|| ‘not_completed’|| ‘all’).
 */
function viewTodoListDom(itemsType) {
    document.getElementById("todo-items").innerHTML = "";
    let todoList = viewTodoList(itemsType);

    for (let i = 0; i < todoList.length; i++) {
        document.getElementById("todo-items").appendChild(addTodoToHtml(todoList[i]));
    }
}


/**
 * Add todoItem to the DOM. It should include the text and id as text fields
 * and a checkbox (for the completed field visualization).
 * @param todoItem: object
 */
function addTodoItemDom(todoItem) {
    if (addTodoItem(todoItem)) {
        document.getElementById("todo-items").appendChild(addTodoToHtml(todoItem));
    }
    else {
        alert("Unable to add this invalid Todo item!");
    }
}

/**
 *
 * @param toDoItem
 * @returns {HTMLDivElement}
 */
function addTodoToHtml(toDoItem) {
    let div = document.createElement('div');
    div.className = "todo";
    div.id = toDoItem.id;
    let todoHtml;
    let checkBoxAttr = toDoItem.completed === true ? "checked" : "";
    let isCompleted = toDoItem.completed === true ? "disabled" : "enabled";
    let isCompletedcol = toDoItem.completed === true ? "#4CAF50" : "#bc4226";
    todoHtml = `<div class="w3-container">
	<!--<button type="button" class="btn btn-info" data-toggle="collapse" style="width:600px;height:40px;background-color = ${isCompletedcol}"-->
	<button type="button" class="btn btn-info" data-toggle="collapse" style="width:600px;height:40px;background-color:${isCompletedcol}"
	data-target="#demo${toDoItem.id}">To do item #${toDoItem.id} </button>
	<div id="demo${toDoItem.id}" class="collapse">
	</p>
	<b>Text:</b>
	</p>
    <textarea rows="4" cols="50" ${isCompleted}>${toDoItem.text}</textarea>	
    <div class="checkbox">
  	<label><input type="checkbox" value="" ${checkBoxAttr} ${isCompleted}>Is Completed</label>
  	</div>
  	<button type="button" id="saveToDo" class="btn btn-info" ${isCompleted} style="width:70px;height:30px;background-color: #4CAF50;">Save</button>
  	<button type="button" id="deleteToDo" class="btn btn-info" ${isCompleted} style="width:70px;height:30px;background-color: #f44336;">Delete</button>
	</div></div></br></br>`

    div.innerHTML = todoHtml;
    return div;
}


/**
 * It should replace the text of the item with the given todoItemId.
 * @param todoItemId
 * @param newText
 */
function editTodoItemDom(todoItemId, newText) {
    if (editTodoItem(todoItemId, newText)) {
        // re-rendering all
        viewTodoListDom("all");

        // improve this solution
        // document.getElementById(""+todoItemId).innerHTML=addTodoToHtml(todoItems.filter(function(todoItemId){ return todoItems["id"]===todoItemId}));

        // update text only
        // var todoListDom = document.getElementById("todo-items");
        // todoListDom.querySelector("#demo"+todoItemId+" textarea").value=newText;

    }
    else {
        alert("Unable to update Todo item with invalid Todo Item ID or empty text!");
    }
}

/**
 * It should delete todoItem with the given todoItemId
 * @param todoItemId: number
 */
function deleteTodoItemDom(todoItemId) {
    if (deleteTodoItem(todoItemId)) {
        // viewTodoListDom("all");
        const list = document.getElementById('todo-items');
        // list.removeChild(event.target.parentElement.parentElement.parentElement);
        // list.removeChild(todoItemId);
        list.removeChild(document.getElementById(todoItemId));

    }
    else {
        alert("Unable to delete a Todo Item with given id" + todoItemId);
    }
}


/**
 *
 * @param todoItemId: number
 */
function completeTodoItemDom(todoItemId){
    // document.getElementById("demo"+todoItemId)
    // $("demo"+todoItemId +" div.checkbox").disabled = true;
    completeTodoItem(todoItemId);
}
