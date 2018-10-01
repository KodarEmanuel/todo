
//State
let state = "all";

let listOfTodos = document.getElementById("block-list");

let Texbox = document.getElementById("txtbox");

document.getElementById("remove-completed").addEventListener("click", (ev)=>
{
    ClearComp();
    OnAll();
    state = "all";
});

 document.getElementById("show-all").addEventListener("click",(ev)=>{
  
    OnAll();
    state ="all";
   
});

document.getElementById("show-completed").addEventListener("click",(ev)=>{
  
   OnCompleted();
   state ="completed";
});


document.getElementById("show-active").addEventListener("click",(ev)=>{
  
   OnActive();
   state ="active";

});

Texbox.addEventListener("keypress",(e)=>{

   
    if ( e.keyCode == 13 ) {
        AddTask(e.target);
        DisplayState();
    }

});



function AddTask(input)
{
    let PanelContainer = document.createElement("div");
    let Chekbox = document.createElement("img");
    let Label = document.createElement("label");
    let Bnt = document.createElement("img");
    Label.innerHTML = input.value;
    PanelContainer.className= "Main-TodoBlock";
    Chekbox.className= "Checkbox";
   
Bnt.addEventListener("click",(ev)=> {
    Bnt.parentNode.remove();
})

    Chekbox.addEventListener('click', (ev)=>{
  PanelContainer.className = (PanelContainer.className=="Main-TodoBlock")?"Main-TodoBlock-Done":"Main-TodoBlock";
  DisplayState();
    });

    PanelContainer.addEventListener("mouseover",(ev)=> {
            
            Bnt.className ="CloseButton";
    });
   
    PanelContainer.addEventListener("mouseleave",(ev)=> {
     
        Bnt.className ="CloseButton Hidden";
});

    PanelContainer.appendChild(Chekbox);
    PanelContainer.appendChild(Label);
   PanelContainer.appendChild(Bnt);
   listOfTodos.appendChild(PanelContainer);
  
  
   input.value="";

    
}



function OnCompleted()
{
   let a = ListBoxList();
   a.forEach((i)=>{
       i.style.display = (i.className=="Main-TodoBlock")?"none":"flex";
   });
}

function OnAll(){
   
    let a = ListBoxList();
    a.forEach((i)=>{
        i.style.display ="flex";
    })
   
}

function OnActive()
{
        let a = ListBoxList();
        a.forEach((i)=>{
            i.style.display = (i.className=="Main-TodoBlock")?"flex":"none";
        })
   

}
function ClearComp()
{
    let a = ListBoxList();
    a.forEach((i)=>{
        if(!(i.className=="Main-TodoBlock")) i.remove();
    })
}
function DisplayState(){
let stateString = String(state);
(stateString=="all")?OnAll():(stateString=="active")? OnActive(): OnCompleted();

}

function ListBoxList(){

var a = Array.from(document.querySelectorAll(".Main-ListBox div"));
return a;
}
