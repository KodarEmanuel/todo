// spara 
var datalist = [];
//State
var state = "all";

var  Datalist = class {
    
}
let listOfTodos = document.getElementById("block-list");

let Texbox = document.getElementById("txtbox");

 document.getElementById("show-all").addEventListener("click",(ev)=>{
  
    var a = Array.from(document.querySelectorAll(".Main-ListBox div"))
    for(var i = 0; i< a.length; i++)
    {
         a[i].style.display="flex"
    }

});

document.getElementById("show-completed").addEventListener("click",(ev)=>{
  
    var a = Array.from(document.querySelectorAll(".Main-ListBox div"))

    for(var i = 0; i<a.length; i++)
    {
        if(a[i].className=="Main-TodoBlock")
       {
            a[i].style.display="none"
       } 
       else
       {
            a[i].style.display="flex"
       }
    }

});


document.getElementById("show-active").addEventListener("click",(ev)=>{
  
    var a = Array.from(document.querySelectorAll(".Main-ListBox div"))

    for(var i=0; i<a.length; i++)
    {
        if(a[i].className=="Main-TodoBlock")
        {
            a[i].style.display="flex"
        } 
        else
        {
            a[i].style.display="none"
        }
    }

});





Texbox.addEventListener("keypress",(e)=>{

    if ( e.keyCode == 13 ) {
        AddTask(e.target);
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
   
    // Bnt.className= "CloseButton";
    // Chekbox.setAttribute('type', 'checkbox');
   
    // Bnt.setAttribute('Onclick', 'RemoveItemFromList(this);');
    // Bnt.addEventListener("onclick", RemoveItemFromList(this.Bnt));
Bnt.addEventListener("click",(ev)=> {
    Bnt.parentNode.remove();
})

    Chekbox.addEventListener('click', (ev)=>{
  PanelContainer.className = (PanelContainer.className=="Main-TodoBlock")?"Main-TodoBlock-Done":"Main-TodoBlock";
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
   datalist.push(PanelContainer);
  
   input.value="";

    if(state == "all")
    {
        OnClickAll();
    }
    else  if(state == "active")
    {
        OnClickActive();
    }
    else  if(state == "completed")
    {
        OnClickCompleted();
    }
}


// function Check( checkbox){
//  let  node =  checkbox.parentNode;
//    try{
//          if(checkbox.parentNode.className=="Main-TodoBlock")
//          {
//              checkbox.parentNode.className="Main-TodoBlock-Done";
//          }
//          else
//          {
//             checkbox.parentNode.className="Main-TodoBlock"
//          }
//    }
//    catch{
//             throw "out of bounds ";
//    }
// }

// function RemoveItemFromList(item){
//     datalist[item.id]=null;
//     datalist = removeNull(datalist);

//     item.parentNode.remove();
// }

// function OnClickAll()
// {
//    var a = Array.from(document.querySelectorAll(".Main-ListBox div"))
//    for(var i = 0; i< a.length; i++)
//    {
//         a[i].style.display="flex"
//    }
// }
// function OnClickActive()
// {
//    var a = Array.from(document.querySelectorAll(".Main-ListBox div"))

//     for(var i=0; i<a.length; i++)
//     {
//         if(a[i].className=="Main-TodoBlock")
//         {
//             a[i].style.display="flex"
//         } 
//         else
//         {
//             a[i].style.display="none"
//         }
//     }
// }
// function OnClickCompleted()
// {
//    var a = Array.from(document.querySelectorAll(".Main-ListBox div"))

//     for(var i = 0; i<a.length; i++)
//     {
//         if(a[i].className=="Main-TodoBlock")
//        {
//             a[i].style.display="none"
//        } 
//        else
//        {
//             a[i].style.display="flex"
//        }
//     }
// }

// function removeNull(vaar)
// {
//     let datalist = [];
//     for(var i =0; i<vaar.length; i++)
//     {
//         if(vaar[i] != null) datalist.push(vaar[i]);
//     }
//     return datalist;
// }
