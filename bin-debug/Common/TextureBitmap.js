var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TextureBitmap = (function (_super) {
    __extends(TextureBitmap, _super);
    function TextureBitmap(resName) {
        var _this = _super.call(this) || this;
        _this.bitmap = null;
        _this.bitmap = new egret.Bitmap(RES.getRes(resName));
        return _this;
    }
    TextureBitmap.prototype.getBitmap = function () {
        return this.bitmap;
    };
    return TextureBitmap;
}(egret.Sprite));
__reflect(TextureBitmap.prototype, "TextureBitmap");
