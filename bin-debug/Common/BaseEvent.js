var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Common;
(function (Common) {
    var BaseEvent = (function () {
        function BaseEvent() {
        }
        // 点击事件回调
        // public static DIR_LEFT_CB:egret.Event = new egret.Event('dir_left_event_callback')
        // public static DIR_RIGHT_CB:egret.Event = new egret.Event('dir_right_event_callback')
        // public static DIR_TOP_CB:egret.Event = new egret.Event('dir_top_event_callback')
        // public static DIR_BOTTOM_CB:egret.Event = new egret.Event('dir_bottom_event_callback')
        BaseEvent.getEvent = function (name) {
            var _this = this;
            var key = Object.keys(BaseEvent).filter(function (key) { return _this[key].type === name; })[0];
            return this[key];
        };
        return BaseEvent;
    }());
    // 点击事件
    BaseEvent.DIR_LEFT = new egret.Event('dir_left_event');
    BaseEvent.DIR_RIGHT = new egret.Event('dir_right_event');
    BaseEvent.DIR_UP = new egret.Event('dir_up_event');
    BaseEvent.DIR_DOWN = new egret.Event('dir_down_event');
    BaseEvent.DIR_SUPER = new egret.Event('dir_super_event');
    BaseEvent.DIR_LEFT_END = new egret.Event('dir_left_end_event');
    BaseEvent.DIR_RIGHT_END = new egret.Event('dir_right_end_event');
    BaseEvent.DIR_UP_END = new egret.Event('dir_up_end_event');
    BaseEvent.DIR_DOWN_END = new egret.Event('dir_down_end_event');
    BaseEvent.DIR_SUPER_END = new egret.Event('dir_super_end_event');
    BaseEvent.PERSON_MOVE = new egret.Event('person_move');
    Common.BaseEvent = BaseEvent;
    __reflect(BaseEvent.prototype, "Common.BaseEvent");
})(Common || (Common = {}));
