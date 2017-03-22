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
    var Person;
    (function (Person) {
        var Mary;
        (function (Mary) {
            var BaseMary = (function (_super) {
                __extends(BaseMary, _super);
                function BaseMary() {
                    var _this = _super.call(this) || this;
                    // movieclip
                    _this.movieClip = null;
                    // 各个方向的 movieclip
                    _this.leftMovieClip = null;
                    _this.rightMovieClip = null;
                    _this.upMovieClip = null;
                    _this.downMovieClip = null;
                    // 各个方向的速度
                    _this.leftSpeed = new Mary.MarySpeed();
                    _this.rightSpeed = new Mary.MarySpeed();
                    _this.upSpeed = 2;
                    _this.downSpeed = 2;
                    // boxBody
                    _this.boxBody = new Box2D.Dynamics.b2BodyDef();
                    _this.boxFixDef = new Box2D.Dynamics.b2FixtureDef();
                    _this.parcelBody = null;
                    _this.parcelPos = new Box2D.Common.Math.b2Vec2(0, 0);
                    _this.initSize();
                    _this.initAnchor();
                    _this.initAllMovieClip();
                    _this.initBodyFix();
                    _this.movieClip = _this.rightMovieClip;
                    return _this;
                }
                /**
                 * 获取人物高度
                 */
                BaseMary.prototype.getHeight = function () {
                    return this.height;
                };
                /**
                 * 获取 positon
                 */
                BaseMary.prototype.getPos = function () {
                    // return this.parcelBody.GetPosition()
                    return this.parcelPos;
                };
                /**
                 * 可重写
                 * 设置 大小
                 */
                BaseMary.prototype.initSize = function () {
                };
                /**
                 * 设置 中心点
                 */
                BaseMary.prototype.initAnchor = function () {
                    this.anchorOffsetX = this.width / 2;
                    this.anchorOffsetY = this.height / 2;
                };
                /**
                 * 初始化 b2BodyDef 和 b2FixtureDef
                 */
                BaseMary.prototype.initBodyFix = function () {
                    var pos = new Box2D.Common.Math.b2Vec2(Common.B2Box.converNum(egret.MainContext.instance.stage.stageWidth / 2), Common.B2Box.converNum(Common.B2Box.planeHeight()));
                    this.boxBody.userData = new Models.UserData([this], Models.UserData.TYPE.PERSON, pos);
                    this.boxBody.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
                    this.boxBody.fixedRotation = true;
                    this.boxBody.position.Set(pos.x, pos.y);
                    this.boxFixDef.density = 50;
                    this.boxFixDef.friction = 80;
                    this.boxFixDef.restitution = 0;
                };
                /**
                 * 添加 shape 包裹形状
                 */
                BaseMary.prototype.addShapeToBox = function (shape) {
                    this.boxFixDef.shape = shape;
                    this.parcelBody = Common.B2Box.world.CreateBody(this.boxBody);
                    this.parcelBody.CreateFixture(this.boxFixDef);
                    this.parcelBody.SetSleepingAllowed(false);
                };
                /**
                 * 设置 MovieClip
                 */
                BaseMary.prototype.getMovieClipData = function (json, png, name) {
                    var factory = new egret.MovieClipDataFactory(json, png);
                    var sp = new egret.MovieClip(factory.generateMovieClipData());
                    sp.name = name;
                    return sp;
                };
                /**
                 * 初始化各个方向的 movieClip
                 */
                BaseMary.prototype.initAllMovieClip = function () {
                };
                /**
                * 设置方向的 MovieClip
                */
                BaseMary.prototype.setMovieClipData = function (movieClip) {
                    if (this.movieClip.name === movieClip.name)
                        return;
                    this.removeChild(this.movieClip);
                    this.movieClip = movieClip;
                    this.addChild(this.movieClip);
                };
                /**
                 * 设置 左 方向的 moviceClip
                 */
                BaseMary.prototype.setLeftMovieClip = function () {
                    this.setMovieClipData(this.leftMovieClip);
                };
                /**
                 * 设置 右 方向的 moviceClip
                 */
                BaseMary.prototype.setRightMovieClip = function () {
                    this.setMovieClipData(this.rightMovieClip);
                };
                /**
                 * 设置 上 方向的 moviceClip
                 */
                BaseMary.prototype.setUpMovieClip = function () {
                    this.setMovieClipData(this.upMovieClip);
                };
                /**
                 * 设置 下 方向的 moviceClip
                 */
                BaseMary.prototype.setDownMovieClip = function () {
                    this.setMovieClipData(this.downMovieClip);
                };
                BaseMary.prototype.gotoAndPlay = function (frame, round) {
                    if (frame === void 0) { frame = 1; }
                    if (round === void 0) { round = -1; }
                    if (!this.movieClip.isPlaying) {
                        this.movieClip.gotoAndPlay(frame, round);
                    }
                };
                BaseMary.prototype.gotoAndStop = function (frame) {
                    if (frame === void 0) { frame = 1; }
                    if (this.movieClip.isPlaying) {
                        this.movieClip.gotoAndStop(frame);
                    }
                };
                /**
                 * 向左走
                 */
                BaseMary.prototype.left = function (event) {
                    this.setLeftMovieClip();
                    // let force:Box2D.Common.Math.b2Vec2 = new Box2D.Common.Math.b2Vec2(-50, 0)
                    // let center:Box2D.Common.Math.b2Vec2 = this.parcelBody.GetWorldCenter()
                    // this.parcelBody.ApplyImpulse(force, center)
                    // if (this.parcelBody.GetLinearVelocity().x > 10) {
                    //     this.parcelBody.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(10, 0))
                    // }
                    // this.parcelBody.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(-this.leftSpeed.getSpeed(), 0))
                    this.parcelPos.x += Common.B2Box.converNum(this.leftSpeed.getSpeed());
                    // this.x -= this.leftSpeed.getSpeed()
                    this.gotoAndPlay();
                };
                /**
                 * 向右走
                 */
                BaseMary.prototype.right = function (event) {
                    this.setRightMovieClip();
                    // this.parcelBody.SetLinearVelocity(new Box2D.Common.Math.b2Vec2(this.rightSpeed.getSpeed(), 0))
                    this.parcelPos.x -= Common.B2Box.converNum(this.leftSpeed.getSpeed());
                    this.gotoAndPlay();
                };
                /**
                 * 跳
                 */
                BaseMary.prototype.jump = function (event) {
                };
                /**
                 * 向下钻/蹲下
                 */
                BaseMary.prototype.drill = function (event) {
                };
                /**
                 * 子弹
                 */
                BaseMary.prototype.super = function (event) {
                };
                /**
                 * 停止 向左走
                 */
                BaseMary.prototype.stopLeft = function (event) {
                    this.gotoAndStop();
                    this.leftSpeed.init();
                };
                /**
                 * 停止 向右走
                 */
                BaseMary.prototype.stopRight = function (event) {
                    this.gotoAndStop();
                    this.rightSpeed.init();
                };
                /**
                 * 停止 跳跃
                 */
                BaseMary.prototype.stopJump = function (event) {
                };
                /**
                 * 停止 蹲下
                 */
                BaseMary.prototype.stopDrill = function (event) {
                };
                /**
                 * 停止 子弹
                 */
                BaseMary.prototype.stopSuper = function (event) {
                };
                return BaseMary;
            }(egret.Sprite));
            Mary.BaseMary = BaseMary;
            __reflect(BaseMary.prototype, "Models.Person.Mary.BaseMary");
        })(Mary = Person.Mary || (Person.Mary = {}));
    })(Person = Models.Person || (Models.Person = {}));
})(Models || (Models = {}));
//# sourceMappingURL=BaseMary.js.map