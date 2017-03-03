var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PersonKernel = (function (_super) {
    __extends(PersonKernel, _super);
    function PersonKernel() {
        var _this = _super.call(this) || this;
        _this.maryObj = null;
        _this.initMary();
        return _this;
    }
    PersonKernel.prototype.initMary = function () {
        this.setPos();
        this.createMary();
    };
    PersonKernel.prototype.setPos = function () {
        this.x = 0;
        this.y = egret.MainContext.instance.stage.stageHeight - 60;
    };
    PersonKernel.prototype.createMary = function () {
        this.maryObj = new BitMary();
        this.addChild(this.maryObj);
    };
    return PersonKernel;
}(egret.Sprite));
__reflect(PersonKernel.prototype, "PersonKernel");
