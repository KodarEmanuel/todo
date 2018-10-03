var TodoApp;
(function (TodoApp) {
    var BaseService;
    (function (BaseService_1) {
        var BaseService = /** @class */ (function () {
            function BaseService() {
            }
<<<<<<< HEAD
            BaseService.prototype.test = function () {
                alert("HELLO WORLD");
=======
            IBaseService.prototype.test = function () {
                alert("HELLO WORLD test");
>>>>>>> f28f86c86d2fd9928c195278282d977f2a570852
            };
            return BaseService;
        }());
        BaseService_1.BaseService = BaseService;
    })(BaseService = TodoApp.BaseService || (TodoApp.BaseService = {}));
})(TodoApp || (TodoApp = {}));
