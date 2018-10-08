var TodoAppUI;
(function (TodoAppUI) {
    let CssHelper;
    (function (CssHelper) {
        CssHelper["MainTodoBlockDone"] = "Main-TodoBlock-Done";
        CssHelper["MainTodoBlockNotDone"] = "MainTodoBlockDone";
    })(CssHelper || (CssHelper = {}));
    class ElemetTodoSticker {
        get texValue() {
            return this.texLabel.textContent;
        }
        set texValue(value) {
            this.texLabel.textContent = value;
        }
        get isdone() {
            return this._Isdone;
        }
        set isdone(value) {
            this._Isdone = value;
            this.listBoxContainer.className = (this._Isdone) ? CssHelper.MainTodoBlockDone : CssHelper.MainTodoBlockNotDone;
        }
        constructor() {
            this.listBoxContainer = new HTMLDivElement();
            this.CheckBoxImage = new HTMLImageElement();
            this.texLabel = new HTMLLabelElement();
            this.CloseElemet = new HTMLImageElement();
            this._Isdone = false;
        }
    }
    class BodyListGenerator {
        constructor() {
            this.ElemetTodoStickerArray = [];
        }
        GetTodoStickerWhere(callbackfn, thisArg) {
            return this.ElemetTodoStickerArray.filter(callbackfn);
            // for(let a of this.ElemetTodoStickerArray){
            //     if(a.isdone)
            //     x.push(a);
            // }
        }
        AddTodoSticker(Labelvalue) {
            var x = new ElemetTodoSticker();
            x.texValue = Labelvalue;
            this.ElemetTodoStickerArray.push(x);
        }
    }
    TodoAppUI.BodyListGenerator = BodyListGenerator;
    class BodyGenerator extends BodyListGenerator {
        constructor() {
            super();
            this.Initial();
        }
        Initial() {
            this.Container = new HTMLDivElement();
            this.BtnShowAll = new HTMLInputElement();
            this.InputElement = new HTMLInputElement();
            //Sumary propertie setter 
            this.BtnShowAll.textContent = "Select all";
            this.BtnShowAll.id = "check-all-btn";
            this.InputElement.type = "text";
            this.InputElement.className = "Main-Body-TextInput";
            this.Container.className = "Main-Body";
            this.Container.appendChild(this.BtnShowAll);
            this.Container.appendChild(this.InputElement);
            // Evets 
            this.BtnShowAll.addEventListener("click", function (ev) {
            });
        }
    }
    TodoAppUI.BodyGenerator = BodyGenerator;
})(TodoAppUI || (TodoAppUI = {}));
//# sourceMappingURL=TodoAppUI.js.map