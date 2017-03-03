var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Common;
(function (Common) {
    var TextureBitmap = (function (_super) {
        __extends(TextureBitmap, _super);
        function TextureBitmap(resName) {
            var _this = _super.call(this) || this;
            _this.bitmap = null;
            _this.texture = null;
            _this.resName = null;
            _this.resName = resName;
            if (!_this.resName)
                return _this;
            _this.texture = RES.getRes(_this.resName);
            _this.bitmap = new egret.Bitmap(_this.texture);
            return _this;
        }
        TextureBitmap.prototype.getBitmap = function () {
            return this.bitmap;
        };
        TextureBitmap.prototype.getTexture = function () {
            return this.texture;
        };
        TextureBitmap.prototype.getName = function () {
            return this.resName;
        };
        return TextureBitmap;
    }(egret.Sprite));
    Common.TextureBitmap = TextureBitmap;
    __reflect(TextureBitmap.prototype, "Common.TextureBitmap");
})(Common || (Common = {}));
//# sourceMappingURL=TextureBitmap.js.map