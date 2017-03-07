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
        var PersonKernel = (function (_super) {
            __extends(PersonKernel, _super);
            function PersonKernel() {
                var _this = _super.call(this) || this;
                _this.maryObj = null;
                _this.initMary();
                return _this;
            }
            PersonKernel.prototype.initMary = function () {
                this.createMary();
                this.setPos();
            };
            PersonKernel.prototype.setPos = function () {
                this.x = 0;
                this.y = egret.MainContext.instance.stage.stageHeight - 60 - this.maryObj.getHeight();
            };
            PersonKernel.prototype.createMary = function () {
                this.maryObj = new Person.Mary.BitMary();
                this.addChild(this.maryObj);
            };
            /**
             * 向左走
             */
            PersonKernel.prototype.left = function () {
                this.maryObj.left();
            };
            /**
             * 向右走
             */
            PersonKernel.prototype.right = function () {
                this.maryObj.right();
            };
            /**
             * 跳
             */
            PersonKernel.prototype.jump = function () {
                this.maryObj.jump();
            };
            /**
             * 向下钻
             */
            PersonKernel.prototype.drill = function () {
                this.maryObj.drill();
            };
            /**
             * 停止 向左走
             */
            PersonKernel.prototype.stopLeft = function () {
                this.maryObj.stopLeft();
            };
            /**
             * 停止 向右走
             */
            PersonKernel.prototype.stopRight = function () {
                this.maryObj.stopRight();
            };
            /**
             * 停止 跳跃
             */
            PersonKernel.prototype.stopJump = function () {
                this.maryObj.stopJump();
            };
            /**
             * 停止 蹲下
             */
            PersonKernel.prototype.stopDrill = function () {
                this.maryObj.stopDrill();
            };
            return PersonKernel;
        }(egret.Sprite));
        Person.PersonKernel = PersonKernel;
        __reflect(PersonKernel.prototype, "Models.Person.PersonKernel");
    })(Person = Models.Person || (Models.Person = {}));
})(Models || (Models = {}));
