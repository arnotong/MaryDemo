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
            };
            PersonKernel.prototype.createMary = function () {
                this.maryObj = new Person.Mary.BitMary();
                this.addChild(this.maryObj);
            };
            /**
             * 向左走
             */
            PersonKernel.prototype.left = function (event) {
                this.maryObj.left(event);
            };
            /**
             * 向右走
             */
            PersonKernel.prototype.right = function (event) {
                this.maryObj.right(event);
            };
            /**
             * 跳
             */
            PersonKernel.prototype.jump = function (event) {
                this.maryObj.jump(event);
            };
            /**
             * 向下钻
             */
            PersonKernel.prototype.drill = function (event) {
                this.maryObj.drill(event);
            };
            /**
             * 停止 向左走
             */
            PersonKernel.prototype.stopLeft = function (event) {
                this.maryObj.stopLeft(event);
            };
            /**
             * 停止 向右走
             */
            PersonKernel.prototype.stopRight = function (event) {
                this.maryObj.stopRight(event);
            };
            /**
             * 停止 跳跃
             */
            PersonKernel.prototype.stopJump = function (event) {
                this.maryObj.stopJump(event);
            };
            /**
             * 停止 蹲下
             */
            PersonKernel.prototype.stopDrill = function (event) {
                this.maryObj.stopDrill(event);
            };
            PersonKernel.prototype.getPos = function () {
                return {
                    x: this.x,
                    y: this.y
                };
            };
            return PersonKernel;
        }(egret.Sprite));
        Person.PersonKernel = PersonKernel;
        __reflect(PersonKernel.prototype, "Models.Person.PersonKernel");
    })(Person = Models.Person || (Models.Person = {}));
})(Models || (Models = {}));
