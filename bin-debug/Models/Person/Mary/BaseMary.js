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
                    _this.initAllMovieClip();
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
                    this.x -= this.leftSpeed.getSpeed();
                    this.gotoAndPlay();
                };
                /**
                 * 向右走
                 */
                BaseMary.prototype.right = function (event) {
                    this.setRightMovieClip();
                    this.x += this.rightSpeed.getSpeed();
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
