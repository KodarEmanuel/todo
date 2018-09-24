
var datalist = [];

var  Datalist = class {

     
    constructor( Id, isDone, InnerTextTask){

        this.isDone = isDone;
        this.InnerTextTask = InnerTextTask;
        this.Id = Id;
    }

}

let listOfTodos =  document.getElementById("main-list");

document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    AddTask();
    return false;
});



function AddTask()
{
    let input = document.querySelector("form input");
<<<<<<< HEAD
    let PanelContainer = document.createElement("div");
    let Chekbox = document.createElement("input");
    let Label = document.createElement("label");
    let Bnt = document.createElement("button");
    Label.innerHTML = input.value;
    Bnt.innerHTML ="X";
    PanelContainer.className= "todoitem";
    PanelContainer.setAttribute("value",String(GetId()));
    Chekbox.setAttribute('type', 'checkbox');
    Bnt.setAttribute('Onclick', 'RemoveItemFromList(this);');
    PanelContainer.appendChild(Chekbox);
    PanelContainer.appendChild(Label);
    PanelContainer.appendChild(Bnt);
   listOfTodos.appendChild(PanelContainer);
  let x =  new Datalist(false,String(input.value));
   datalist.push(x);
   
  
=======
    let node1 = document.createElement("li");
    let node2 = document.createElement("div");
    let node3 = document.createElement("h2");
    let node4 = document.createElement("button");
    node2.className = "card";
    node4.className = "btn-green";
    node4.textContent ="Delete";
    
    node2.appendChild(node3);
    node2.appendChild(node4);
    node1.appendChild(node2);

   node3.innerHTML  = input.value;
   listOfTodos.appendChild(node1);
   input.value="";
   input.placeholder="What else needs to be done?";
>>>>>>> cae250c94c6d5a8ed809233aab548b85227bbe78
}

function GetId(){

    var num = 0;
    for(var i in datalist.length){
        
    num = i ; 
    alert(i);
    }
    return num;
}

function RemoveItemFromList(item){
/// Delete item 
alert(item);
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