var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Common;
(function (Common) {
    var KeyEvent = (function () {
        function KeyEvent() {
        }
        KeyEvent.addEventListener = function (target, eventType, type, func, thisObj) {
            var _this = this;
            (target || document).addEventListener(eventType, function (event) {
                if (type) {
                    if (event.code === _this.TYPE[type]) {
                        func && func.call(thisObj, event);
                    }
                }
                else {
                    func && func.call(thisObj, event);
                }
            }, false);
        };
        KeyEvent.removeEventListener = function (target, eventType, func) {
            (target || document).removeEventListener(eventType, func, false);
        };
        return KeyEvent;
    }());
    KeyEvent.TYPE = {
        'LEFT': 'ArrowLeft',
        'RIGHT': 'ArrowRight',
        'TOP': 'ArrowTop',
        'BOTTOM': 'ArrowBottom',
        'SPACE': 'Space'
    };
    Common.KeyEvent = KeyEvent;
    __reflect(KeyEvent.prototype, "Common.KeyEvent");
})(Common || (Common = {}));
//# sourceMappingURL=keyEvent.js.map