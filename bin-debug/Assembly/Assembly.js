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
        _this.world = new p2.World();
        _this.init();
        return _this;
    }
    Assembly.prototype.init = function () {
        // let body:p2.Body = new p2.Body({mass: 1, position: [1, 10]})
        // let shape:p2.Shape = new p2.Circle(1)
        // body.addShape(shape)
        // this.world.addBody(body)
        var factor = 50;
        //添加方形刚体
        var boxShape = new p2.Rectangle(2, 1);
        var boxBody = new p2.Body({ mass: 1, position: [0, 1], angularVelocity: 1 });
        boxBody.addShape(boxShape);
        this.world.addBody(boxBody);
        var display = new Common.TextureBitmap('bg_jpg').getBitmap();
        display.width = boxShape.width * factor;
        display.height = boxShape.height * factor;
        console.log(display, boxShape.width * factor, boxShape.height * factor);
        display.anchorOffsetX = display.width / 2;
        display.anchorOffsetY = display.height / 2;
        boxBody.displays = [display];
        this.addChild(display);
        // this.initMap()
        // this.initPerson()
        // this.initControlPanel()
        // this.registerController()
    };
    Assembly.prototype.initMap = function () {
        this.map = new Models.Map.MapKernel();
        // this.word.addBody(this.map)
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
