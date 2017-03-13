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
    var P2Body = (function (_super) {
        __extends(P2Body, _super);
        function P2Body() {
            var _this = _super.call(this) || this;
            _this.world = Common.GlobalWorld.world;
            _this.body = null;
            return _this;
        }
        P2Body.prototype.getBody = function (opts) {
            return new p2.Body(opts);
        };
        P2Body.prototype.getBox = function (opts) {
            return new p2.Box(opts);
        };
        P2Body.prototype.getCircle = function (opts) {
            return new p2.Circle(opts);
        };
        P2Body.prototype.addBodyToWorld = function () {
            this.world.addBody(this.body);
        };
        P2Body.prototype.addDisplay = function (displays, p2Shape) {
            var _this = this;
            this.body.displays = this.setDisplaysOpts(displays, p2Shape);
            this.body.displays.forEach(function (dis) {
                _this.addChild(dis);
            });
        };
        P2Body.prototype.setDisplaysOpts = function (displays, p2Shape) {
            var _this = this;
            return displays.map(function (dis) {
                dis = _this.setBoxDisplays(dis, p2Shape);
                dis = _this.setCircleDisplays(dis, p2Shape);
                dis.anchorOffsetX = dis.width / 2;
                dis.anchorOffsetY = dis.height / 2;
                return dis;
            });
        };
        P2Body.prototype.setBoxDisplays = function (display, p2Shape) {
            if (p2Shape instanceof p2.Box) {
                display.width = p2Shape.width;
                display.height = p2Shape.height;
            }
            return display;
        };
        P2Body.prototype.setCircleDisplays = function (display, p2Shape) {
            if (p2Shape instanceof p2.Circle) {
                display.width = p2Shape.radius * 2;
                display.height = p2Shape.radius * 2;
            }
            return display;
        };
        return P2Body;
    }(egret.Sprite));
    Common.P2Body = P2Body;
    __reflect(P2Body.prototype, "Common.P2Body");
})(Common || (Common = {}));
