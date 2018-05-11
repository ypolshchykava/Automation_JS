let todoItems = [];
const list = document.getElementById('todo-items');

let loadToDoItems = function () {
    $.getJSON("todos.json", function (data) {
        console.log(data);
        todoItems = data;
    }).done(function(){
		
			
						
			// editTodoItemDom(55,"fsdfs");  // negative
			//addTodoItemDom({ "text": " NEW ITEM ADDED", "completed": true, "id": 3 });			
			// deleteTodoItemDom(22);  // negative
			viewTodoListDom("all");

		});
};

loadToDoItems();





    list.addEventListener('click',clickHandler);

function clickHandler(event){
    if (event.target.id === 'deleteToDo'){
    	console.log(event.target.parentElement.parentElement.parentElement.id);
        deleteTodoItemDom(parseInt(event.target.parentElement.parentElement.parentElement.id));
    }
    
    return;
}


const myRadiosView = document.getElementById('viewType');
myRadiosView.addEventListener('click',viewHandler);

function viewHandler(event){
    if (event.target.value === "All-values"){
    	
    	console.log(event.target.value);
        viewTodoListDom("all");
    }

    if (event.target.value === "Completed"){
    	viewTodoListDom("completed");
	}

    if (event.target.value === "Not-Completed"){
    	viewTodoListDom("not_completed");
	}
    
    return;
}



const myAddItem = document.getElementById('addNewItem');
myAddItem.addEventListener('click',addHandler);

function addHandler(event){
    
    // todoItem : { text: string, completed: boolean, id: number }.
    // generateItemId()

    let myNewItemText = document.getElementById('newItemText').value;
    let myNewItemCreated =  {"text":myNewItemText,"completed":false,"id":generateItemId()};
    console.log(myNewItemCreated);
	addTodoItemDom(myNewItemCreated);
	document.getElementById('newItemText').value="";
    
    
    return;
}