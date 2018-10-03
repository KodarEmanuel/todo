namespace TodoAppUI {

enum CssHelper{

    MainTodoBlockDone = "Main-TodoBlock-Done",
    MainTodoBlockNotDone = "MainTodoBlockDone",

}


    class ElemetTodoSticker{
        public readonly listBoxContainer:HTMLDivElement;
        private CheckBoxImage:HTMLImageElement;
        private  texLabel:HTMLLabelElement;
        private  CloseElemet:HTMLImageElement;
        private _Isdone:boolean = false; 
        get texValue():string{
          return this.texLabel.textContent;
        }
        set texValue(value:string){
            this.texLabel.textContent = value;
            
        }
        get isdone():boolean{
            return this._Isdone;
        }
        set isdone(value: boolean){
                this._Isdone = value;
               this.listBoxContainer.className =  (this._Isdone)?CssHelper.MainTodoBlockDone:CssHelper.MainTodoBlockNotDone;
               
        }

      public constructor(){
            this.listBoxContainer = new HTMLDivElement();
            this.CheckBoxImage = new HTMLImageElement();
            this.texLabel = new HTMLLabelElement();
            this.CloseElemet = new HTMLImageElement();
   
        }

    }
    export class BodyListGenerator{
      public ElemetTodoStickerArray: Array<ElemetTodoSticker> = [];
        public constructor(){
              
         }
         
         public GetTodoStickerWhere(callbackfn: (value:ElemetTodoSticker, index: number, array: ElemetTodoSticker[]) => any, thisArg?: any) : Array<ElemetTodoSticker>{
           
            return this.ElemetTodoStickerArray.filter(callbackfn);
            // for(let a of this.ElemetTodoStickerArray){
            //     if(a.isdone)
            //     x.push(a);
            // }

         }
       public AddTodoSticker(Labelvalue:string){
        var x = new ElemetTodoSticker();
        x.texValue = Labelvalue;
        this.ElemetTodoStickerArray.push(x);
       }

    //    public RemoveTodoSticker(Labelvalue:HTMLDivElement){
      
    //   var x =   this.ElemetTodoStickerArray.indexOf(Labelvalue);
    //     this.ElemetTodoStickerArray.splice(x.);
    //    }

         
     
     }

export class BodyGenerator extends BodyListGenerator {
public Container:HTMLDivElement;
private BtnShowAll:HTMLInputElement;
private InputElement:HTMLInputElement;

public constructor(){
    super();
this.Initial();

}
private Initial():void {
    this.Container = new HTMLDivElement();
    this.BtnShowAll = new HTMLInputElement();
    this.InputElement = new HTMLInputElement();
    //Sumary propertie setter 
    this.BtnShowAll.textContent = "Select all";
    this.BtnShowAll.id ="check-all-btn";
    this.InputElement.type = "text";
    this.InputElement.className = "Main-Body-TextInput";
    this.Container.className="Main-Body";
    this.Container.appendChild(this.BtnShowAll);
    this.Container.appendChild(this.InputElement);
// Evets 

this.BtnShowAll.addEventListener("click",function(ev){

});

    
}
}




}