var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Models;
(function (Models) {
    var Person;
    (function (Person) {
        var Mary;
        (function (Mary) {
            var MarySpeed = (function () {
                function MarySpeed(min, max, acc) {
                    this.min = 0.1;
                    this.max = 2.0;
                    this.acc = 0.2;
                    this.speed = 0;
                    this.setSpeedData(min, max, acc);
                }
                MarySpeed.prototype.setSpeedData = function (min, max, acc) {
                    this.min = this.formatNumber(min, this.min);
                    this.max = this.formatNumber(max, this.max);
                    this.acc = this.formatNumber(acc, this.acc);
                    this.speed = this.formatNumber(min, this.min);
                };
                MarySpeed.prototype.formatNumber = function (value, defValue) {
                    var val = defValue;
                    var fVal = Number(value);
                    if (!isNaN(fVal) && value !== null) {
                        val = fVal;
                    }
                    return val;
                };
                MarySpeed.prototype.getMax = function () {
                    return this.max;
                };
                MarySpeed.prototype.getAcc = function () {
                    return this.acc;
                };
                MarySpeed.prototype.setData = function (min, max, acc) {
                    this.setSpeedData(min, max, acc);
                    return this;
                };
                MarySpeed.prototype.getSpeed = function () {
                    this.speed = this.speed + this.acc;
                    this.speed = this.speed > this.max ? this.max : this.speed;
                    return this.speed;
                };
                MarySpeed.prototype.init = function () {
                    this.setSpeedData(this.min, this.max, this.acc);
                    return this;
                };
                return MarySpeed;
            }());
            Mary.MarySpeed = MarySpeed;
            __reflect(MarySpeed.prototype, "Models.Person.Mary.MarySpeed");
        })(Mary = Person.Mary || (Person.Mary = {}));
    })(Person = Models.Person || (Models.Person = {}));
})(Models || (Models = {}));
