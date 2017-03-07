var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Common;
(function (Common) {
    var KeyEvent = (function () {
        function KeyEvent(dom, event) {
            if (dom === void 0) { dom = document; }
            if (event === void 0) { event = []; }
            this.target = null;
            this.events = [];
            this.eventsCallback = [];
            this.target = dom;
            this.events = event;
            this.bingEvent();
        }
        KeyEvent.prototype.bingEvent = function () {
            var _this = this;
            this.events.forEach(function (event) {
                _this.target.addEventListener(event, function (e) {
                    _this.runCallback(event, e);
                }, false);
            });
        };
        KeyEvent.prototype.runCallback = function (type, e) {
            this.eventsCallback.forEach(function (item) {
                if (item.type === type && item.codeType && e.code === item.codeType) {
                    item.func && item.func(e);
                }
            });
        };
        KeyEvent.prototype.registerListener = function (type, codeType, func) {
            this.eventsCallback.push({
                codeType: codeType,
                type: type,
                func: func
            });
        };
        KeyEvent.prototype.initListener = function () {
            this.eventsCallback = [];
        };
        KeyEvent.addEventListener = function (target, eventType, type, func, thisObj) {
            (target || document).addEventListener(eventType, function (event) {
                if (type) {
                    if (event.code === type) {
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
        'UP': 'ArrowTop',
        'DOWN': 'ArrowBottom',
        'SPACE': 'Space'
    };
    Common.KeyEvent = KeyEvent;
    __reflect(KeyEvent.prototype, "Common.KeyEvent");
})(Common || (Common = {}));
