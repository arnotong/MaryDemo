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
            PersonKernel.prototype.walkLeft = function () {
            };
            /**
             * 向右走
             */
            PersonKernel.prototype.walkRight = function () {
                this.maryObj.walkRight();
            };
            /**
             * 向左跑
             */
            PersonKernel.prototype.runLeft = function () {
            };
            /**
             * 向右跑
             */
            PersonKernel.prototype.runRight = function () {
            };
            /**
             * 跳
             */
            PersonKernel.prototype.jump = function () {
            };
            /**
             * 向下钻
             */
            PersonKernel.prototype.toDrill = function () {
            };
            /**
             * 停止
             */
            PersonKernel.prototype.stopClip = function () {
                this.maryObj.stopClip();
            };
            return PersonKernel;
        }(egret.Sprite));
        Person.PersonKernel = PersonKernel;
        __reflect(PersonKernel.prototype, "Models.Person.PersonKernel");
    })(Person = Models.Person || (Models.Person = {}));
})(Models || (Models = {}));
