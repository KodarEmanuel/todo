<<<<<<< HEAD
=======
namespace test
{
>>>>>>> a3b5e16f554b7d4d34b431595e7d73d6c21efc93

// import * as TodoAppUI from './TodoAppUI'
// // import TodoAppUI = require("./TodoAppUI");
// import {TodoAppUI}  from "./TodoAppUI";

 


    interface IBaseService{
    AddTodocument():void;
   TodoGUI:BodyGenerator;

  }

  class BaseTodo implements IBaseService{
   public TodoGUI:BodyGenerator;
   
     
    public constructor(){
          this.TodoGUI = new BodyGenerator();
        
      }
      AddTodocument(): void {
       let x =   document.querySelector("div.Main");
       x.appendChild(this.TodoGUI.Container);
       x.appendChild(this.TodoGUI.TodoStickerMain);

    }
  
      
}

 enum CssHelper{

  MainTodoBlockDone = "Main-TodoBlock-Done",
  MainTodoBlockNotDone = "MainTodoBlockDone",
  MainListBox= "Main-ListBox"

}


 class ElemetTodoSticker extends HTMLDivElement{
      private CheckBoxImage:HTMLImageElement;
      private  texLabel:HTMLLabelElement;
      private  CloseElemet:HTMLImageElement;
      private _Isdone:boolean = false; 
      private _Detele:boolean = false;
      public Delete():void{
          this._Detele = true;
          this.remove();
          
      }
    public get IsDeleted():boolean{
          
         return this._Detele;

      }
    public  get texValue():string{
        return this.texLabel.textContent;
      }
    public set texValue(value:string)
      {
          this.texLabel.textContent = value;
          
      }
 

      public set isdone(value:boolean)
      {
      
          this._Isdone = value;
          this.className =  (this._Isdone)?CssHelper.MainTodoBlockDone:CssHelper.MainTodoBlockNotDone;
      }
      public get isdone():boolean
  {
      return this._Isdone;
  }

    public constructor(){
          super();
          let x = this;
          this.CheckBoxImage = new HTMLImageElement();
          this.texLabel = new HTMLLabelElement();
          this.CloseElemet = new HTMLImageElement;
          this.appendChild(this.CheckBoxImage);
          this.appendChild(this.texLabel);
          this.appendChild(this.CloseElemet);
          this.CloseElemet.addEventListener("click",(ev:MouseEvent)=>{
            this.Delete();
          });
     
          this.CheckBoxImage.addEventListener("click",(ev:MouseEvent)=>{
            this._Isdone = true;
          });

         
 
      }

  }
 class BodyListGenerator {
      public TodoStickers: Array<ElemetTodoSticker> = [];
      public TodoStickerMain:HTMLDivElement = new HTMLDivElement;

      public constructor(){
            
           this.TodoStickerMain.className = CssHelper.MainListBox;
       }
       
       public GetTodoStickerWhere(callbackfn: (value:ElemetTodoSticker, index: number, array: ElemetTodoSticker[]) => any, thisArg?: any) : Array<ElemetTodoSticker>{
         
          return this.TodoStickers.filter(callbackfn);
          // for(let a of this.ElemetTodoStickerArray){
          //     if(a.isdone)
          //     x.push(a);
          // }

       }
      public ForeachChildren():void{
          this.TodoStickers.forEach((i)=>{
             this.TodoStickerMain.appendChild(i);
              
          } );
      }
     public AddTodoSticker(Labelvalue:string):ElemetTodoSticker{
      var x = new ElemetTodoSticker();
      x.texValue = Labelvalue;
      this.TodoStickers.push(x);
      this.ForeachChildren();
      return x;
     }

     public RemoveTodoSticker(value:ElemetTodoSticker){
    var x =   this.TodoStickers.indexOf(value);
      this.TodoStickers.splice(x,1);
     this.ForeachChildren();
     }

       
   
   }

 class BodyGenerator extends BodyListGenerator {
public Container:HTMLDivElement;
private BtnShowAll:HTMLInputElement;
private InputElement:HTMLInputElement;

public constructor(){
  super();
this.Initial();

}
private Initial():void {
  this.Container = new HTMLDivElement;
  this.BtnShowAll = new HTMLInputElement;
  this.InputElement = new HTMLInputElement;
  //Sumary propertie setter 
  this.BtnShowAll.textContent = "Select all";
  this.BtnShowAll.id ="check-all-btn";
  this.InputElement.type = "text";
  this.InputElement.className = "Main-Body-TextInput";
  this.Container.className="Main-Body";
  this.Container.appendChild(this.BtnShowAll);
  this.Container.appendChild(this.InputElement);
// Evets 

this.BtnShowAll.addEventListener("click", ()=>{
this.TodoStickers.forEach((i)=>{

  i.isdone = true;
} );
});
this.InputElement.addEventListener("keypress", (ev)=>{
  if(ev.keyCode==13 && this.InputElement.value !=""){
     this.Container.appendChild(this.AddTodoSticker(this.InputElement.value));
     this.InputElement.value="";
  }
  }); 
  
}
<<<<<<< HEAD
  
}


  var x:IBaseService =  new BaseTodo();
  x.AddTodocument();



=======
    
    }
>>>>>>> a3b5e16f554b7d4d34b431595e7d73d6c21efc93
