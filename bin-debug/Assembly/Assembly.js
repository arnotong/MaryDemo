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
    // private initPlane():void {
    //     let plane:p2.Plane = new p2.Plane()
    //     let planeBody:p2.Body = new p2.Body({
    //         position: [0, 0]
    //     })
    //     planeBody.addShape(plane)
    //     planeBody.displays = []
    //     this.world.addBody(planeBody)
    // }
    Assembly.prototype.initWorld = function () {
        egret.Ticker.getInstance().register(function (dt) {
            if (dt < 10)
                return;
            if (dt > 1000)
                return;
            Common.B2Box.world.Step(dt / 1000, 10, 10);
            // let height:number = egret.MainContext.instance.stage.stageHeight
            // this.world.bodies.forEach(body => {
            //     body.displays.forEach(box => {
            //         if (box) {
            //             box.x = body.position[0]
            //             box.y = height - body.position[1]
            //             box.rotation = 360 - body.angle * 180 / Math.PI
            //         }
            //     })
            // })
        }, this);
    };
    Assembly.prototype.init = function () {
        this.initWorld();
        // this.initPlane() 
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
        var body = new Common.B2Box.b2BodyDef();
        body.type = Common.B2Box.b2Body.b2_dynamicBody;
        body.position.Set(10 / 30, 100 / 30);
        var fixDef = new Common.B2Box.b2FixtureDef();
        fixDef.density = 1.0;
        fixDef.friction = 0.5;
        fixDef.restitution = 0.2;
        var shape = new Common.B2Box.b2PolygonShape();
        shape.SetAsBox(100 / 30, 100 / 30);
        fixDef.shape = shape;
        body.userData = 'arno_1';
        Common.B2Box.world.CreateBody(body).CreateFixture(fixDef);
        body.userData = 'arno_2';
        Common.B2Box.world.CreateBody(body).CreateFixture(fixDef);
        body.userData = 'arno_3';
        Common.B2Box.world.CreateBody(body).CreateFixture(fixDef);
        var display = new Common.TextureBitmap('bg_jpg').getBitmap();
        display.width = 100;
        display.height = 100;
        this.addChild(display);
        console.log(Common.B2Box.world.GetBodyList(), z);
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
