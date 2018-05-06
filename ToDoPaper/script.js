let toDoItems = [];

let loadToDoItems = function () {
    $.getJSON("todos.json", function (data) {
        console.log(data);
        toDoItems = data;
    });
};
loadToDoItems();
