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
    PanelContainer.setAttribute("Id", datalist.length);
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
    datalist.pop(x => x.Id=item.Id);
}

function OnClickAll()
{
    for(var i=0; i<datalist.length; i++)
    {
        document.getElementById(datalist[i].Id).style.visibility='visible';
    }
}
function OnClickActive()
{
    for(var i=0; i<datalist.length; i++)
    {
       if(datalist[i].isDone)
       {
            document.getElementById(datalist[i].Id).style.visibility='visible';
       } 
       else
       {
            document.getElementById(datalist[i].Id).style.visibility='hidden';
       }
    }
}
function OnClickCompleted()
{
    for(var i = 0; i<datalist.length; i++)
    {
        if(datalist[i].isDone)
       {
            document.getElementById(datalist[i].Id).style.visibility='hidden';
       } 
       else
       {
        document.getElementById(datalist[i].Id).style.visibility='visible';           
       }
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