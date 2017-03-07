var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Common;
(function (Common) {
    var BaseEvent = (function () {
        function BaseEvent() {
        }
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
    Common.BaseEvent = BaseEvent;
    __reflect(BaseEvent.prototype, "Common.BaseEvent");
})(Common || (Common = {}));
