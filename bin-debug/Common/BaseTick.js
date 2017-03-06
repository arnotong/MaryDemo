var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Common;
(function (Common) {
    var BaseTick = (function () {
        function BaseTick(isRender) {
            if (isRender === void 0) { isRender = true; }
            this.tickFunc = null;
            this.isRender = true;
            this.isStop = false;
            this.isRender = isRender;
        }
        BaseTick.prototype.startTick = function (func, isRender) {
            if (isRender === void 0) { isRender = true; }
            this.tickFunc = func;
            this.isStop = false;
            this.isRender = isRender;
            egret.startTick(this.tickHandle, this);
        };
        BaseTick.prototype.tickHandle = function (t) {
            if (!this.isStop) {
                this.tickFunc && this.tickFunc();
            }
            return this.isRender;
        };
        BaseTick.prototype.stopTick = function (isRender) {
            if (isRender === void 0) { isRender = true; }
            this.isStop = true;
            this.isRender = isRender;
            egret.startTick(this.tickHandle, this);
        };
        return BaseTick;
    }());
    Common.BaseTick = BaseTick;
    __reflect(BaseTick.prototype, "Common.BaseTick");
})(Common || (Common = {}));
