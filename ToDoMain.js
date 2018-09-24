
var datalist = [];
let listOfTodos =  document.getElementById("ul-list");

document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    AddTask();
    return false;
});

function AddTask()
{

    let input = document.querySelector("form input");
    let node1 = document.createElement("li");
    let node2 = document.createElement("div");
    let node3 = document.createElement("h2");
    let node4 = document.createElement("button");
    node4.className = "btn-green";
    node4.textContent ="Delete";
    
    node2.appendChild(node3);
    node2.appendChild(node4);
    node1.appendChild(node2);

   node3.innerHTML  = input.value;
   listOfTodos.appendChild(node1);
   
  
}


// // function lowerCase  (e) {
    

    


// //     if (e.keyCode == 13) {
// //        AddTask();
// //     }        
// }

/*
  function function1() {
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode("Element 4"));
}
*/