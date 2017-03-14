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
            var BrickP2 = (function (_super) {
                __extends(BrickP2, _super);
                function BrickP2(resName, bitmapW, bitmapH, xNum, yNum, x, y, isLand) {
                    var _this = _super.call(this) || this;
                    _this.xNum = 0;
                    _this.yNum = 0;
                    _this.resName = null;
                    _this.bitmapW = 0;
                    _this.bitmapH = 0;
                    _this.posX = 0;
                    _this.posY = 0;
                    _this.box = null;
                    _this.isLand = false;
                    _this.resName = resName;
                    _this.bitmapW = bitmapW;
                    _this.bitmapH = bitmapH;
                    _this.xNum = xNum;
                    _this.yNum = yNum;
                    _this.posX = x;
                    _this.posY = y;
                    _this.isLand = isLand;
                    console.log('island -----', isLand);
                    _this.initBox();
                    _this.initBody();
                    _this.initBrick();
                    _this.addBodyToWorld();
                    return _this;
                }
                BrickP2.prototype.initBody = function () {
                    this.body = this.getBody({
                        mass: 0,
                        allowSleep: false,
                        collisionResponse: this.isLand,
                        position: [this.posX, this.bitmapH * this.yNum / 2]
                    });
                };
                BrickP2.prototype.initBox = function () {
                    this.box = this.getBox({
                        width: this.bitmapW * this.xNum,
                        height: this.bitmapH * this.yNum
                    });
                };
                BrickP2.prototype.initBrick = function () {
                    var display = null;
                    if (this.isLand) {
                        display = new Bricks.Brick(this.resName, this.bitmapW, this.bitmapH, this.xNum, this.yNum);
                        this.addChild(display);
                    }
                    this.anchorOffsetX = 0;
                    this.anchorOffsetY = this.box.height / 2;
                    // console.log(this.anchorOffsetX, this.anchorOffsetY, this.box)
                    this.body.addShape(this.box);
                    this.body.displays = [display];
                    // this.addDisplay([new Brick(this.resName, this.bitmapW, this.bitmapH, this.xNum, this.yNum)], this.box)
                };
                return BrickP2;
            }(Common.P2Body));
            Bricks.BrickP2 = BrickP2;
            __reflect(BrickP2.prototype, "Models.Map.Bricks.BrickP2");
        })(Bricks = Map.Bricks || (Map.Bricks = {}));
    })(Map = Models.Map || (Models.Map = {}));
})(Models || (Models = {}));
