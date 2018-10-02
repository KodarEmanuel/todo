//Scope protected 
(function(){
//Gloabal Variables
const enumState ={
  get showAll(){ return"all";},
  get showActive(){ return"active";},
  get showCompleted(){ return"completed";},

}
let state = "all";
let listOfTodos;
let Texbox;


//StartPoint of the application 
(function main() {  
  Init();

    })();
//Functions
 function Init() 
 {
  listOfTodos  = document.getElementById("block-list");
    
  Texbox  = document.getElementById("txtbox");
   
  document.getElementById("check-All").addEventListener("click", (ev)=>{
    CheckAll();
    DisplayState(enumState.showAll);
});

document.getElementById("remove-completed").addEventListener("click", (ev)=>{
    ClearComp();
    DisplayState(enumState.showAll);
});

 document.getElementById("show-all").addEventListener("click",(ev)=>{
  
    DisplayState(enumState.showAll);
   
});

document.getElementById("show-completed").addEventListener("click",(ev)=>{
    
    DisplayState(enumState.showCompleted);
  
});


document.getElementById("show-active").addEventListener("click",(ev)=>{
  
    DisplayState(enumState.showActive);

});

Texbox.addEventListener("keypress",(e)=>{

   
    if ( e.keyCode == 13 ) {
        AddTask(e.target);
        DisplayState();
    }

});


 }
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



function ClearComp()
{
    let a = ListBoxList();
    a.forEach((i)=>{
        if(!(i.className=="Main-TodoBlock")) i.remove();
    });
}
function CheckAll()
{
    let a = ListBoxList();
        a.forEach((i)=>{
            i.className="Main-TodoBlock-Done";
        });
}
//use enumState to call this or call this with all, active , completed as string //defualt is all 
function DisplayState(Enumstate){
let stateString = String(Enumstate);
(stateString=="completed")?OnCompleted():(stateString=="active")? OnActive():OnAll(); 
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
    });
   
}

function OnActive()
{
        let a = ListBoxList();
        a.forEach((i)=>{
            i.style.display = (i.className=="Main-TodoBlock")?"flex":"none";
        });
   

}



}

function ListBoxList(){

 
return Array.from(document.querySelectorAll(".Main-ListBox div"));;
}
})();
