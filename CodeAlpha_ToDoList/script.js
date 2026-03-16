function addTask() {
  var taskValue = document.getElementById("inp").value;

  if (taskValue == "") {
    alert("Please enter a task!");
    return;
  }

  var listItem = document.createElement("li");
  listItem.innerHTML =
    taskValue + " <span class='del-btn' onclick='deleteTask(this)'>X</span>";

  document.getElementById("list").appendChild(listItem);

  document.getElementById("inp").value = "";
}

function deleteTask(element) {
  element.parentElement.remove();
}
