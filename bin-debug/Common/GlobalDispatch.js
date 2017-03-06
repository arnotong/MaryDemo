var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Common;
(function (Common) {
    var GlobalDispatch = (function () {
        function GlobalDispatch() {
        }
        GlobalDispatch.dispatchEvent = function (event) {
            this.dispatch.dispatchEvent(event);
        };
        GlobalDispatch.addEventListener = function (event, listener, thisObj, useCapture, priority) {
            this.dispatch.addEventListener(event.type, listener, thisObj, useCapture, priority);
        };
        return GlobalDispatch;
    }());
    GlobalDispatch.dispatch = new egret.EventDispatcher();
    Common.GlobalDispatch = GlobalDispatch;
    __reflect(GlobalDispatch.prototype, "Common.GlobalDispatch");
})(Common || (Common = {}));
//# sourceMappingURL=GlobalDispatch.js.map