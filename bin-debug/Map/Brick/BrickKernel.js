var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BrickKernel = (function (_super) {
    __extends(BrickKernel, _super);
    function BrickKernel(brickData) {
        var _this = _super.call(this) || this;
        _this.texture = null;
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
    BrickKernel.prototype.setTexture = function (func) {
        var _this = this;
        this.texture = new LoadTexture('brick_png', function (_) {
            func.call(_this);
        });
    };
    BrickKernel.prototype.initBrick = function () {
        var _this = this;
        this.setBrickPos();
        this.setTexture(function (bitmap) {
            _this.setBricks();
        });
    };
    BrickKernel.prototype.setBricks = function () {
        var _this = this;
        var bitmap = this.texture.getBitmap();
        var width = bitmap.width;
        var height = bitmap.height;
        var preEndX = 0;
        this.brickData.data.forEach(function (map) {
            if (map.land) {
                var brick = new Brick(map.w, map.h, preEndX, 0);
                _this.addChild(brick);
            }
            preEndX = map.w * width + preEndX;
        });
    };
    return BrickKernel;
}(egret.DisplayObjectContainer));
__reflect(BrickKernel.prototype, "BrickKernel");
