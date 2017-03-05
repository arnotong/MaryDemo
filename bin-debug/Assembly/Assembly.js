var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Assembly = (function (_super) {
    __extends(Assembly, _super);
    function Assembly() {
        var _this = _super.call(this) || this;
        _this.map = null;
        _this.person = null;
        _this.init();
        return _this;
    }
    Assembly.prototype.init = function () {
        this.initMap();
        this.initPerson();
    };
    Assembly.prototype.initMap = function () {
        this.map = new MapKernel();
        this.addChild(this.map);
    };
    Assembly.prototype.initPerson = function () {
        this.person = new PersonKernel();
        this.addChild(this.person);
    };
    return Assembly;
}(egret.Sprite));
__reflect(Assembly.prototype, "Assembly");
