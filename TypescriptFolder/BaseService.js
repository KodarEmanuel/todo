var TodoApp;
(function (TodoApp) {
    var BaseService;
    (function (BaseService_1) {
        var BaseService = /** @class */ (function () {
            function BaseService() {
            }
            BaseService.prototype.test = function () {
                alert("HELLO WORLD");
            };
            return BaseService;
        }());
        BaseService_1.BaseService = BaseService;
    })(BaseService = TodoApp.BaseService || (TodoApp.BaseService = {}));
})(TodoApp || (TodoApp = {}));
