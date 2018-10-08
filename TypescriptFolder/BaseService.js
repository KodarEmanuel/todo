var test;
(function (test) {
    class foo {
        get bar() {
            return this._bar;
        }
        set bar(theBar) {
            this._bar = theBar;
        }
    }
})(test || (test = {}));
