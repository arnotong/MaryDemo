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
                    this.y = egret.MainContext.instance.stage.stageHeight - this.height;
                };
                BrickKernel.prototype.initBrick = function () {
                    this.setBrickPos();
                    this.setBricks();
                };
                BrickKernel.prototype.setBricks = function () {
                    var _this = this;
                    var bitmap = new Common.TextureBitmap('brick_png').getBitmap();
                    var width = bitmap.width;
                    var height = bitmap.height;
                    var preEndX = 0;
                    this.brickData.data.forEach(function (map) {
                        if (map.land) {
                            var brick = new Bricks.Brick(map.w, map.h, preEndX, 0);
                            _this.addChild(brick);
                        }
                        preEndX = map.w * width + preEndX;
                    });
                };
                return BrickKernel;
            }(egret.DisplayObjectContainer));
            Bricks.BrickKernel = BrickKernel;
            __reflect(BrickKernel.prototype, "Models.Map.Bricks.BrickKernel");
        })(Bricks = Map.Bricks || (Map.Bricks = {}));
    })(Map = Models.Map || (Models.Map = {}));
})(Models || (Models = {}));
//# sourceMappingURL=BrickKernel.js.map