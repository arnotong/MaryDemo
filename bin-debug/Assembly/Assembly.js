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
    // private world:p2.World = Common.GlobalWorld.world
    function Assembly() {
        var _this = _super.call(this) || this;
        _this.map = null;
        _this.person = null;
        _this.control = null;
        _this.init();
        return _this;
    }
    Assembly.prototype.initPlane = function () {
        var body = new Common.B2Box.b2BodyDef();
        body.position.Set(0, egret.MainContext.instance.stage.stageHeight);
        body.type = Common.B2Box.b2Body.b2_staticBody;
        var fixDef = new Common.B2Box.b2FixtureDef();
        // fixDef.density = 1.0
        // fixDef.friction = 0.5
        // fixDef.restitution = 0.2
        var shape = new Common.B2Box.b2PolygonShape();
        shape.SetAsBox(320 / 30, 10 / 30);
        fixDef.shape = shape;
        var display = new Common.TextureBitmap('brick_png').getBitmap();
        display.width = 320;
        display.height = 10;
        display.x = 0;
        display.y = egret.MainContext.instance.stage.stageHeight;
        display.anchorOffsetX = 0;
        display.anchorOffsetY = display.height / 2;
        body.userData = [display];
        this.addChild(display);
        Common.B2Box.world.CreateBody(body).CreateFixture(fixDef);
    };
    Assembly.prototype.initWorld = function () {
        egret.Ticker.getInstance().register(function (dt) {
            Common.B2Box.world.Step(1 / 60, 8, 3);
            Common.B2Box.world.ClearForces();
            var bodies = Common.B2Box.world['m_island']['m_bodies'] || [];
            bodies.forEach(function (body) {
                if (body && body.GetPosition && body.GetType() !== Common.B2Box.b2Body.b2_staticBody) {
                    var pos_1 = body.GetPosition();
                    var userData = body.GetUserData() || [];
                    userData.forEach(function (display) {
                        display.x = pos_1.x;
                        display.y = pos_1.y;
                    });
                }
            });
        }, this);
    };
    Assembly.prototype.init = function () {
        this.initWorld();
        this.initPlane();
        // this.initMap()
        // this.initPerson()
        // this.initControlPanel()
        // this.registerController()
        // let body = new p2.Body({mass: 10, position: [0, 500]})
        // let box = new p2.Box({  width: 14, height: 14 })
        // body.addShape(box)
        // let display = new Common.TextureBitmap('bg_jpg').getBitmap()
        // display.width = (<p2.Box>box).width
        // display.height = (<p2.Box>box).height
        // display.anchorOffsetX = display.width / 2
        // display.anchorOffsetY = display.height / 2
        // body.displays = [display]
        // this.addChild(display)
        // this.world.addBody(body)
        // window.setInterval(_ => {
        //     body.position = [body.position[0] + 10, body.position[1]]
        // }, 500)
        var getBody = function () {
            var body = new Common.B2Box.b2BodyDef();
            body.type = Common.B2Box.b2Body.b2_dynamicBody;
            body.position.Set(100 / 30, 100 / 30);
            var fixDef = new Common.B2Box.b2FixtureDef();
            fixDef.density = 1.0;
            fixDef.friction = 0.6;
            fixDef.restitution = 0.8;
            var shape = new Common.B2Box.b2PolygonShape();
            shape.SetAsBox(100 / 30, 100 / 30);
            fixDef.shape = shape;
            return {
                body: body,
                fixDef: fixDef
            };
        };
        var _a = getBody(), body = _a.body, fixDef = _a.fixDef;
        var display = new Common.TextureBitmap('bg_jpg').getBitmap();
        display.width = 100;
        display.height = 100;
        display.anchorOffsetX = 0;
        display.anchorOffsetY = display.height;
        body.userData = [display];
        this.addChild(display);
        var body1 = Common.B2Box.world.CreateBody(body);
        var mass = new Common.B2Box.b2MassData();
        mass.mass = 40;
        body1.SetMassData(mass);
        body1.CreateFixture(fixDef);
        // display.width = (<p2.Box>box).width
        // display.height = (<p2.Box>box).height
        // display.anchorOffsetX = display.width / 2
        // display.anchorOffsetY = display.height / 2
        // body.displays = [display]
        // this.addChild(display)
        // this.world.addBody(body)       
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
