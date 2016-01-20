$(document).ready(function() {
      
var defaults = {
  // CSS selectors and attributes that would be used by the JavaScript functions
  todoTask: "todo-task",
  todoHeader: "task-header",
  todoDate: "task-date",
  todoDescription: "task-description",
  taskId: "task-",
  formId: "todo-form",
  dataAttribute: "data",
  deleteDiv: "delete-div"
}, codes = {
  "1" : "#pending", // For pending tasks
  "2" : "#inProgress",
  "3" : "#completed"
};

// Add Task
var generateElement = function(params) {
  var parent = $(codes[params.code]),
      wrapper;

  if (!parent) {
    return;
  }

  wrapper = $("<div />", {
    "class" : defaults.todoTask,
    "id" : defaults.taskId + params.id,
    "data" : params.id
  }).appendTo(parent);

  $("<div />", {
    "class" : defaults.todoHeader,
    "text": params.title
  }).appendTo(wrapper);

  $("<div />", {
    "class" : defaults.todoDate,
    "text": params.date
  }).appendTo(wrapper);

  $("<div />", {
    "class" : defaults.todoDescription,
    "text": params.description
  }).appendTo(wrapper);
};

generateElement({
  id: "123",
  code: "1",
  title: "My Uber Important Task",
  date: "5/2/2014",
  description: "I have to do a lot of steps to implement this task!"
});

var removeElement = function(params) {
  $("#" + defaults.taskId + params.id).remove();
};


var addItem = function() {
  var inputs = $("#" + defaults.formId + " :input"),
      errorMessage = "Title can not be empty",
      id, title, description, date, tempData;

  if (inputs.length !== 4) {
    return;
  }

  title = inputs[0].value;
  description = inputs[1].value;
  date = inputs[2].value;

  if (!title) {
    generateDialog(errorMessage);
    return;
  }

  id = new Date().getTime();

  

  // Saving element in local storage
  data[id] = tempData;
  localStorage.setItem("todoData", JSON.stringify(data));

  // Generate Todo Element
  generateElement(tempData);

  // Reset Form
  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";
};

function dateCompare(task-date, Due Date){
    return new Date(Due Date) > new Date(task-date);
}

function storeToLocal(key, items){
		localStorage[key] = JSON.stringify(items);
	}

	function getFromLocal(key){
		if(localStorage[key])
			return JSON.parse(localStorage[key]);
		else 
			return [];
	}

});




