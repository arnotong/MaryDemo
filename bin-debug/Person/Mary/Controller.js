var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person;
(function (Person) {
    var Mary;
    (function (Mary) {
        var Controller = (function (_super) {
            __extends(Controller, _super);
            function Controller() {
                var _this = _super.call(this) || this;
                _this.bingEvent();
                return _this;
            }
            Controller.prototype.bingEvent = function () {
            };
            return Controller;
        }(egret.Sprite));
        Mary.Controller = Controller;
        __reflect(Controller.prototype, "Person.Mary.Controller");
    })(Mary = Person.Mary || (Person.Mary = {}));
})(Person || (Person = {}));
//# sourceMappingURL=Controller.js.map