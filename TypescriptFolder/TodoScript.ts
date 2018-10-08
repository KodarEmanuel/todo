namespace app {

enum ClassHelper {
    MainBody= ".Main-Body",
    MainListBox = ".Main-ListBox",
    MainTodoBlock = "Main-TodoBlock",
    MainTodoBlockDone = "Main-TodoBlock-Done",
    Checkbox = "Checkbox",
    CloseButton="CloseButton",
    MainBodyTextInput = "Main-Body-TextInput"
}

 enum HtmlHelper  {
 Div = "div",
 Input = "input",
 Select = "select",
 Label = "label",
 HeadLineBig = "h1",
 Img = "img",
 Button = "button",

}

 class Html{
 public static Create(telemttype:HtmlHelper):any{
    let x =   document.createElement(telemttype);
   return x;
}

}  
class  StickerBlock{
    public Stickers:Array<HTMLDivElement> = [];
    public constructor(){

    
    }
   

    public RemoveTodoSticker(value:HTMLDivElement){
        var x =   this.Stickers.indexOf(value);
          this.Stickers.splice(x,1);
       
         }

   public CreateSticker(labelMessage:string){
    let MainBody:HTMLDivElement = Html.Create(HtmlHelper.Div); 
   let LabelTex:HTMLLabelElement = Html.Create(HtmlHelper.Label); 
    let Checkbox:HTMLImageElement = Html.Create(HtmlHelper.Img); 
    let Close:HTMLImageElement = Html.Create(HtmlHelper.Img); 

    MainBody.className = ClassHelper.MainTodoBlock; 
    LabelTex.innerHTML = labelMessage;
    Checkbox.className = ClassHelper.Checkbox;
    Close.className = ClassHelper.CloseButton;
    Close.addEventListener("click",()=>{
        this.RemoveTodoSticker(MainBody);
        MainBody.remove();
        
    });

    this.Stickers.push(MainBody);
    MainBody.appendChild(Checkbox);
    MainBody.appendChild(LabelTex);
    MainBody.appendChild(Close);

}

}

class TodoHandler{       
    private MainBody:HTMLDivElement;  
    private MainListBox:HTMLDivElement; 
    private BtnCheckall:HTMLButtonElement;
    private TextBox:HTMLInputElement;
    private Block:StickerBlock;
    
    
    public constructor(){
        
      
      this.Init();
    }
    private Init():void {
        this.Block = new StickerBlock();
        this.MainBody = <HTMLDivElement>document.querySelector(ClassHelper.MainBody);
        this.MainListBox = <HTMLDivElement>document.querySelector(ClassHelper.MainListBox);
        this.BtnCheckall = Html.Create(HtmlHelper.Button);
        this.BtnCheckall.innerHTML=  "check all";
        this.TextBox = Html.Create(HtmlHelper.Input);
        this.TextBox.type = "text";
        this.TextBox.className = ClassHelper.MainBodyTextInput;
        this.TextBox.addEventListener("keypress",(ev)=>{
                if(ev.keyCode == 13 && this.TextBox.value !="" ){
                    this.Block.CreateSticker(this.TextBox.value);
                    for(let i of this.MainListBox.childNodes){
                            i.remove();
                    }
                    this.Block.Stickers.forEach((i)=>{
                        this.MainListBox.appendChild(i);
                    })
                }
        });
        this.MainBody.appendChild(this.BtnCheckall);
        this.MainBody.appendChild(this.TextBox);

    
    }
    


}

var x = new TodoHandler();
}