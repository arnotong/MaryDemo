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
        var MapKernel = (function (_super) {
            __extends(MapKernel, _super);
            function MapKernel() {
                var _this = _super.call(this) || this;
                _this.brick = null;
                _this.mapJson = null;
                _this.init();
                _this.getMapJson();
                return _this;
            }
            MapKernel.prototype.init = function () {
                this.setSize();
                this.setPos();
            };
            MapKernel.prototype.setSize = function () {
                this.width = egret.MainContext.instance.stage.stageWidth;
                this.height = egret.MainContext.instance.stage.stageHeight;
            };
            MapKernel.prototype.setPos = function () {
                this.x = 0;
                this.y = 0;
            };
            MapKernel.prototype.getMapJson = function () {
                this.mapJson = RES.getRes('map_json');
                this.initMap();
            };
            MapKernel.prototype.initMap = function () {
                this.initBrick();
            };
            MapKernel.prototype.initBrick = function () {
                this.brick = new Map.Bricks.BrickKernel(this.mapJson.brick);
                this.addChild(this.brick);
            };
            return MapKernel;
        }(egret.Sprite));
        Map.MapKernel = MapKernel;
        __reflect(MapKernel.prototype, "Models.Map.MapKernel", ["Models.Map.IMap"]);
    })(Map = Models.Map || (Models.Map = {}));
})(Models || (Models = {}));
//# sourceMappingURL=MapKernel.js.map