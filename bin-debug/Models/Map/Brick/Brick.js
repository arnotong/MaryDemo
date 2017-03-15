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
                // private world = Common.GlobalWorld.world
                function BrickKernel(brickData) {
                    var _this = _super.call(this) || this;
                    _this.brickData = null;
                    _this.resName = 'brick_png';
                    _this.brickData = brickData;
                    _this.width = 0;
                    _this.height = 0;
                    _this.initBrick();
                    return _this;
                }
                BrickKernel.prototype.setBrickPos = function () {
                    // this.height = this.brickData.height
                    this.x = 0;
                    this.y = 0; // egret.MainContext.instance.stage.stageHeight - this.height
                };
                BrickKernel.prototype.initBrick = function () {
                    this.setBrickPos();
                    this.setBricks();
                };
                BrickKernel.prototype.setBricks = function () {
                    var _this = this;
                    var bitmap = new Common.TextureBitmap(this.resName).getBitmap();
                    var bitmapW = bitmap.width;
                    var bitmapH = bitmap.height;
                    var preEndX = 0;
                    this.brickData.data.forEach(function (map) {
                        var width = bitmapW * map.w;
                        var height = bitmapH * map.h;
                        if (map.land) {
                            _this.addBrickToWorld(width, height, preEndX, height / 2);
                        }
                        preEndX = width + preEndX;
                    });
                };
                BrickKernel.prototype.addBrickToWorld = function (width, height, x, y) {
                    // let body = new p2.Body({
                    //     mass: 0,
                    //     position: [x, y]
                    // })
                    // let box = new p2.Box({ width: width, height: height })
                    // body.addShape(box)
                    // let display:egret.Bitmap = new Common.TextureBitmap(this.resName).getBitmap()
                    // display.fillMode = egret.BitmapFillMode.REPEAT
                    // display.width = width
                    // display.height = height
                    // display.anchorOffsetX = width / 2
                    // display.anchorOffsetY = height / 2
                    // body.displays = [display]
                    // this.addChild(display)
                    // this.world.addBody(body)
                };
                return BrickKernel;
            }(egret.Sprite));
            Bricks.BrickKernel = BrickKernel;
            __reflect(BrickKernel.prototype, "Models.Map.Bricks.BrickKernel");
        })(Bricks = Map.Bricks || (Map.Bricks = {}));
    })(Map = Models.Map || (Models.Map = {}));
})(Models || (Models = {}));
