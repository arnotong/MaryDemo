var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Common;
(function (Common) {
    var BaseEvent = (function () {
        function BaseEvent() {
            // 点击事件
            this.DIR_LEFT = 'dir_left_event';
            this.DIR_RIGHT = 'dir_right_event';
            this.DIR_TOP = 'dir_top_event';
            this.DIR_BOTTOM = 'dir_bottom_event';
            // 点击事件回调
            this.DIR_LEFT_CB = 'dir_left_event_callback';
            this.DIR_RIGHT_CB = 'dir_right_event_callback';
            this.DIR_TOP_CB = 'dir_top_event_callback';
            this.DIR_BOTTOM_CB = 'dir_bottom_event_callback';
        }
        return BaseEvent;
    }());
    Common.BaseEvent = BaseEvent;
    __reflect(BaseEvent.prototype, "Common.BaseEvent");
})(Common || (Common = {}));
//# sourceMappingURL=BaseEvent.js.map