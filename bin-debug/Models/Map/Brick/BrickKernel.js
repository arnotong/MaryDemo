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
            var BrickKernel = (function (_super) {
                __extends(BrickKernel, _super);
                function BrickKernel(brickData) {
                    var _this = _super.call(this) || this;
                    _this.brickData = null;
                    _this.brickData = brickData;
                    _this.initBrick();
                    return _this;
                }
                BrickKernel.prototype.setBrickPos = function () {
                    this.height = this.brickData.height;
                    this.x = 0;
                    this.y = 0; // egret.MainContext.instance.stage.stageHeight - this.height
                };
                BrickKernel.prototype.initBrick = function () {
                    this.setBrickPos();
                    this.setBricks();
                };
                BrickKernel.prototype.setBricks = function () {
                    var _this = this;
                    var resName = 'brick_png';
                    var bitmap = new Common.TextureBitmap(resName).getBitmap();
                    var bitmapW = bitmap.width;
                    var bitmapH = bitmap.height;
                    var preEndX = 0;
                    this.brickData.data.forEach(function (map) {
                        if (map.land) {
                            var brickP2 = new Bricks.BrickP2(resName, bitmapW, bitmapH, map.w, map.h, preEndX, 0);
                            _this.addChild(brickP2);
                        }
                        preEndX = map.w * bitmapW + preEndX;
                    });
                };
                return BrickKernel;
            }(Common.P2Body));
            Bricks.BrickKernel = BrickKernel;
            __reflect(BrickKernel.prototype, "Models.Map.Bricks.BrickKernel");
        })(Bricks = Map.Bricks || (Map.Bricks = {}));
    })(Map = Models.Map || (Models.Map = {}));
})(Models || (Models = {}));
