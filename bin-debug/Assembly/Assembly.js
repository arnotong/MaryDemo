var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Assembly = (function (_super) {
    __extends(Assembly, _super);
    function Assembly() {
        var _this = _super.call(this) || this;
        _this.map = null;
        _this.person = null;
        _this.control = null;
        _this.isDebug = !1;
        _this.init();
        return _this;
    }
    Assembly.prototype.initWorld = function () {
        var _this = this;
        egret.Ticker.getInstance().register(function (dt) {
            Common.B2Box.world.Step(1 / 60, 10, 10);
            Common.B2Box.world.ClearForces();
            Common.B2Box.world.DrawDebugData();
            _this.updateBoxBody(Common.B2Box.world.GetBodyList());
        }, this);
    };
    Assembly.prototype.updateBoxBody = function (body) {
        if (body) {
            if (body.GetPosition) {
                var pos_1 = body.GetPosition();
                var angle_1 = body.GetAngle();
                var userData = (body.GetUserData() || new Models.UserData());
                userData.getDisplays().forEach(function (display) {
                    display.x = pos_1.x * 30;
                    display.y = pos_1.y * 30;
                    display.rotation = Math.round(angle_1 * 180 / Math.PI);
                });
            }
            this.updateBoxBody(body.GetNext());
        }
    };
    Assembly.prototype.init = function () {
        this.initWorld();
        // this.initPlane()
        this.initMap();
        this.initPerson();
        this.initControlPanel();
        this.registerController();
        // 开启 debug
        this.setDebugDraw();
    };
    Assembly.prototype.setDebugDraw = function () {
        if (!this.isDebug)
            return;
        var draw = new Box2D.Dynamics.b2DebugDraw();
        draw.SetSprite(egret.MainContext.instance.stage.$screen['canvas'].getContext('2d'));
        draw.SetDrawScale(30);
        draw.SetFlags(Box2D.Dynamics.b2DebugDraw.e_shapeBit);
        draw.SetFillAlpha(0.3);
        Common.B2Box.world.SetDebugDraw(draw);
    };
    Assembly.prototype.initMap = function () {
        this.map = new Models.Map.MapKernel();
        this.addChild(this.map);
    };
    Assembly.prototype.initPerson = function () {
        this.person = new Models.Person.PersonKernel();
        this.addChild(this.person);
    };
    Assembly.prototype.initControlPanel = function () {
        this.control = new Views.ControlPanel();
        this.addChild(this.control);
    };
    Assembly.prototype.registerController = function () {
        new Controller.PersonControll(this.person, this.map, this);
    };
    return Assembly;
}(egret.Sprite));
__reflect(Assembly.prototype, "Assembly");
//# sourceMappingURL=Assembly.js.map