var TodoApp;
(function (TodoApp) {
    var BaseService;
    (function (BaseService) {
        var IBaseService = /** @class */ (function () {
            function IBaseService() {
            }
            IBaseService.prototype.test = function () {
                alert("HELLO WORLD");
            };
            return IBaseService;
        }());
        BaseService.IBaseService = IBaseService;
    })(BaseService = TodoApp.BaseService || (TodoApp.BaseService = {}));
})(TodoApp || (TodoApp = {}));
