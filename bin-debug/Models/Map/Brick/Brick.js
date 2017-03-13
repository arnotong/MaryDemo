var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Models;
(function (Models) {
    var Map;
    (function (Map) {
        var Bricks;
        (function (Bricks) {
            var Brick = (function (_super) {
                __extends(Brick, _super);
                function Brick(resName, bitmapW, bitmapH, xNum, yNum) {
                    var _this = _super.call(this) || this;
                    _this.xNum = 0;
                    _this.yNum = 0;
                    _this.resName = null;
                    _this.bitmapW = 0;
                    _this.bitmapH = 0;
                    _this.resName = resName;
                    _this.bitmapW = bitmapW;
                    _this.bitmapH = bitmapH;
                    _this.xNum = xNum;
                    _this.yNum = yNum;
                    _this.setSize();
                    _this.x = 0;
                    _this.y = 0;
                    _this.loadTexture();
                    return _this;
                }
                Brick.prototype.setSize = function () {
                    this.width = this.bitmapW * this.xNum;
                    this.height = this.bitmapH * this.yNum;
                };
                Brick.prototype.getBitmap = function (x, y) {
                    var bitmap = new Common.TextureBitmap(this.resName).getBitmap();
                    bitmap.x = x;
                    bitmap.y = y;
                    return bitmap;
                };
                Brick.prototype.loadTexture = function () {
                    for (var i = 0; i < this.xNum; i++) {
                        for (var j = 0; j < this.yNum; j++) {
                            this.addChild(this.getBitmap(this.bitmapW * i, this.bitmapH * j));
                        }
                    }
                };
                return Brick;
            }(egret.Sprite));
            Bricks.Brick = Brick;
            __reflect(Brick.prototype, "Models.Map.Bricks.Brick");
        })(Bricks = Map.Bricks || (Map.Bricks = {}));
    })(Map = Models.Map || (Models.Map = {}));
})(Models || (Models = {}));
