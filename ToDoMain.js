function AddTask()
{
    if(document.getElementById("new-todo").value == "")return;
    var node = document.createElement("LI");
    var textnode = document.createTextNode(document.getElementById("new-todo").value);
    node.appendChild(textnode);
    document.getElementById("ul-list").appendChild(node);
    document.getElementById("new-todo").value = "";
}

function lowerCase  (e) {
    if (e.keyCode == 13) {
       AddTask();
    }        
}


/*
  function function1() {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("Element 4"));
}
*/