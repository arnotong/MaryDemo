var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BrickCenter = (function (_super) {
    __extends(BrickCenter, _super);
    function BrickCenter() {
        var _this = _super.call(this) || this;
        _this.texture = null;
        _this.initBrick();
        return _this;
    }
    BrickCenter.prototype.setBrickPos = function () {
        this.height = 60;
        this.x = 0;
        this.y = egret.MainContext.instance.stage.stageHeight - this.height;
    };
    BrickCenter.prototype.setTexture = function (func) {
        var _this = this;
        this.texture = new LoadTexture('/resource/assets/brick.png', function (_) {
            func.call(_this);
        });
    };
    BrickCenter.prototype.initBrick = function () {
        var _this = this;
        this.setBrickPos();
        this.setTexture(function (bitmap) {
            _this.getMapJson();
        });
    };
    BrickCenter.prototype.getMapJson = function () {
        RES.getResAsync('map_json', this.setBricks, this);
    };
    BrickCenter.prototype.setBricks = function (mapsJson) {
        var _this = this;
        var bitmap = this.texture.getBitmap();
        var width = bitmap.width;
        var height = bitmap.height;
        var preEndX = 0;
        mapsJson.forEach(function (map) {
            if (map.land) {
                var brick = new Brick(map.w, map.h, preEndX, 0);
                _this.addChild(brick);
            }
            preEndX = map.w * width + preEndX;
        });
    };
    return BrickCenter;
}(egret.DisplayObjectContainer));
__reflect(BrickCenter.prototype, "BrickCenter");
//# sourceMappingURL=BrickCenter.js.map