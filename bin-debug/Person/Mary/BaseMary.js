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
        var BaseMary = (function (_super) {
            __extends(BaseMary, _super);
            function BaseMary() {
                var _this = _super.call(this) || this;
                _this.initControl();
                return _this;
            }
            /**
             * 可重写，用于按键绑定
             */
            BaseMary.prototype.initControl = function () {
            };
            BaseMary.prototype.touchBegin = function (event) {
            };
            return BaseMary;
        }(egret.Sprite));
        Mary.BaseMary = BaseMary;
        __reflect(BaseMary.prototype, "Person.Mary.BaseMary");
    })(Mary = Person.Mary || (Person.Mary = {}));
})(Person || (Person = {}));
//# sourceMappingURL=BaseMary.js.map