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
        _this.world = Common.GlobalWorld.world;
        _this.init();
        return _this;
    }
    Assembly.prototype.initPlane = function () {
        var plane = new p2.Plane();
        var planeBody = new p2.Body({
            position: [0, 0]
        });
        planeBody.addShape(plane);
        planeBody.displays = [];
        this.world.addBody(planeBody);
    };
    Assembly.prototype.initWorld = function () {
        var _this = this;
        this.world.sleepMode = p2.World.BODY_SLEEPING;
        egret.Ticker.getInstance().register(function (dt) {
            if (dt < 10)
                return;
            if (dt > 1000)
                return;
            _this.world.step(dt / 1000);
            var height = egret.MainContext.instance.stage.stageHeight;
            _this.world.bodies.forEach(function (body) {
                body.displays.forEach(function (box) {
                    if (box) {
                        box.x = body.position[0];
                        box.y = height - body.position[1];
                        box.rotation = 360 - body.angle * 180 / Math.PI;
                    }
                });
            });
        }, this);
    };
    Assembly.prototype.init = function () {
        this.initWorld();
        this.initPlane();
        this.initMap();
        // this.initPerson()
        // this.initControlPanel()
        // this.registerController()
        var body = new p2.Body({ mass: 10, position: [680, 500] });
        var box = new p2.Circle({ radius: 14 });
        body.addShape(box);
        var display = new Common.TextureBitmap('bg_jpg').getBitmap();
        display.width = box.radius * 2;
        display.height = box.radius * 2;
        display.anchorOffsetX = display.width / 2;
        display.anchorOffsetY = display.height / 2;
        body.displays = [display];
        this.addChild(display);
        this.world.addBody(body);
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
        new Controller.PersonControll(this.person, this.map);
    };
    return Assembly;
}(egret.Sprite));
__reflect(Assembly.prototype, "Assembly");
