var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Brick = (function (_super) {
    __extends(Brick, _super);
    function Brick(xNum, yNum, x, y) {
        var _this = _super.call(this) || this;
        _this.posX = 0;
        _this.posY = 0;
        _this.xNum = 0;
        _this.yNum = 0;
        _this.bWidth = 0;
        _this.bHeight = 0;
        _this.xNum = xNum;
        _this.yNum = yNum;
        _this.posX = x;
        _this.posY = y;
        _this.setBitmapSize();
        _this.setPos();
        _this.setSize();
        _this.loadTexture();
        return _this;
    }
    Brick.prototype.setBitmapSize = function () {
        var bitmap = this.getBitmap(0, 0);
        this.bHeight = bitmap.height;
        this.bWidth = bitmap.width;
    };
    Brick.prototype.setPos = function () {
        this.x = this.posX;
        this.y = this.posY;
    };
    Brick.prototype.setSize = function () {
        this.width = this.bWidth * this.xNum;
        this.height = this.bHeight * this.yNum;
    };
    Brick.prototype.getBitmap = function (x, y) {
        var bitmap = new egret.Bitmap();
        bitmap.texture = RES.getRes('brick_png');
        bitmap.x = x;
        bitmap.y = y;
        return bitmap;
    };
    Brick.prototype.loadTexture = function () {
        for (var i = 0; i < this.xNum; i++) {
            for (var j = 0; j < this.yNum; j++) {
                this.addChild(this.getBitmap(this.bWidth * i, this.bHeight * j));
            }
        }
    };
    return Brick;
}(egret.DisplayObjectContainer));
__reflect(Brick.prototype, "Brick");
//# sourceMappingURL=Brick.js.map