// spara 
var datalist = [];

var  Datalist = class {
    
    constructor( Id, isDone, InnerTextTask){  // int, bool, Text

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
    let PanelContainer = document.createElement("div");
    let Chekbox = document.createElement("input");
    let Label = document.createElement("label");
    let Bnt = document.createElement("button");
    Label.innerHTML = input.value;
    Bnt.innerHTML ="X";
    PanelContainer.className= "todoitem";
    PanelContainer.setAttribute("value", datalist.length);
    Chekbox.setAttribute('type', 'checkbox');
    Bnt.setAttribute('Onclick', 'RemoveItemFromList(this);');
    PanelContainer.appendChild(Chekbox);
    PanelContainer.appendChild(Label);
    PanelContainer.appendChild(Bnt);
   listOfTodos.appendChild(PanelContainer);
   let x =  new Datalist(datalist.length,false,String(input.value));
   datalist.push(x);
   input.value="";
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
    var node = item.parentNode;
    console.dir(item);
    for(var i in item){
        item[i]
    }
    document.getElementById("main-list").removeChild(node);
}

function OnClickAll()
{
    var items=Array.from(document.querySelectorAll(".todoitem"));
    for(var i in items)
    {
        items[i].visable="true";
    }
}
function OnClickActive()
{
    var items=Array.from(document.querySelectorAll(".todoitem"));
    for(var i in items)
    {
        if(items[i].querySelector("input")==true)
        {
            items[i].visable="true";
        }
    }
}
function OnClickCompleted()
{
    var items=Array.from(document.querySelectorAll(".todoitem"));
    for(var i in items)
    {
        items[i].visable="true";
    }
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