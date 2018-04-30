addTodoItem(todoItem: object)
//Check if todoItem is valid and if yes, add it to todoItems array. 
//Function should return the result of validity check (text field is not empty, all fields are present and id is unique). 
//todoItem : { text: string, completed: boolean, id: number }. 

viewTodoList(itemsType: string)
//Function takes itemsType argument (‘completed’, ‘not_completed’, ‘all’) and returns all items of this type. 

editTodoItem(todoItemId: number, newText: string) 
//If newText is not empty, function changes text of todoItem by todoItemId on the new text. 
//It should return flag, whether edit was successful. 

deleteTodoItem(todoItemId: number)
//Delete todoItem by todoItemId, return flag, whether delete was successful. 

completeTodoItem(todoItemId: number) 
//Change completed field of todoItem (get it by todoItemId) on true.
