var app;
(function (app) {
    let ClassHelper;
    (function (ClassHelper) {
        ClassHelper["MainBody"] = ".Main-Body";
        ClassHelper["MainListBox"] = ".Main-ListBox";
        ClassHelper["MainTodoBlock"] = "Main-TodoBlock";
        ClassHelper["MainTodoBlockDone"] = "Main-TodoBlock-Done";
        ClassHelper["Checkbox"] = "Checkbox";
        ClassHelper["CloseButton"] = "CloseButton";
        ClassHelper["MainBodyTextInput"] = "Main-Body-TextInput";
    })(ClassHelper || (ClassHelper = {}));
    let HtmlHelper;
    (function (HtmlHelper) {
        HtmlHelper["Div"] = "div";
        HtmlHelper["Input"] = "input";
        HtmlHelper["Select"] = "select";
        HtmlHelper["Label"] = "label";
        HtmlHelper["HeadLineBig"] = "h1";
        HtmlHelper["Img"] = "img";
        HtmlHelper["Button"] = "button";
    })(HtmlHelper || (HtmlHelper = {}));
    class Html {
        static Create(telemttype) {
            let x = document.createElement(telemttype);
            return x;
        }
    }
    class StickerBlock {
        constructor() {
            this.Stickers = [];
        }
        RemoveTodoSticker(value) {
            var x = this.Stickers.indexOf(value);
            this.Stickers.splice(x, 1);
        }
        CreateSticker(labelMessage) {
            let MainBody = Html.Create(HtmlHelper.Div);
            let LabelTex = Html.Create(HtmlHelper.Label);
            let Checkbox = Html.Create(HtmlHelper.Img);
            let Close = Html.Create(HtmlHelper.Img);
            MainBody.className = ClassHelper.MainTodoBlock;
            LabelTex.innerHTML = labelMessage;
            Checkbox.className = ClassHelper.Checkbox;
            Close.className = ClassHelper.CloseButton;
            Close.addEventListener("click", () => {
                this.RemoveTodoSticker(MainBody);
                MainBody.remove();
            });
            this.Stickers.push(MainBody);
            MainBody.appendChild(Checkbox);
            MainBody.appendChild(LabelTex);
            MainBody.appendChild(Close);
        }
    }
    class TodoHandler {
        constructor() {
            this.Init();
        }
        Init() {
            this.Block = new StickerBlock();
            this.MainBody = document.querySelector(ClassHelper.MainBody);
            this.MainListBox = document.querySelector(ClassHelper.MainListBox);
            this.BtnCheckall = Html.Create(HtmlHelper.Button);
            this.BtnCheckall.innerHTML = "check all";
            this.TextBox = Html.Create(HtmlHelper.Input);
            this.TextBox.type = "text";
            this.TextBox.className = ClassHelper.MainBodyTextInput;
            this.TextBox.addEventListener("keypress", (ev) => {
                if (ev.keyCode == 13 && this.TextBox.value != "") {
                    this.Block.CreateSticker(this.TextBox.value);
                    for (let i of this.MainListBox.childNodes) {
                        i.remove();
                    }
                    this.Block.Stickers.forEach((i) => {
                        this.MainListBox.appendChild(i);
                    });
                }
            });
            this.MainBody.appendChild(this.BtnCheckall);
            this.MainBody.appendChild(this.TextBox);
        }
    }
    var x = new TodoHandler();
})(app || (app = {}));
//# sourceMappingURL=TodoScript.js.map