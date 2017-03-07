var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Views;
(function (Views) {
    var ControlPanel = (function (_super) {
        __extends(ControlPanel, _super);
        function ControlPanel() {
            var _this = _super.call(this) || this;
            _this.startEventList = [
                { btn: 'leftBtn', event: Common.BaseEvent.DIR_LEFT, key: Common.KeyEvent.TYPE.LEFT },
                { btn: 'rightBtn', event: Common.BaseEvent.DIR_RIGHT, key: Common.KeyEvent.TYPE.RIGHT },
                { btn: 'upBtn', event: Common.BaseEvent.DIR_UP, key: Common.KeyEvent.TYPE.UP },
                { btn: 'downBtn', event: Common.BaseEvent.DIR_DOWN, key: Common.KeyEvent.TYPE.DOWN },
                { btn: 'superBtn', event: Common.BaseEvent.DIR_SUPER, key: Common.KeyEvent.TYPE.SPACE }
            ];
            _this.endEventList = [
                { btn: 'leftBtn', event: Common.BaseEvent.DIR_LEFT_END, key: Common.KeyEvent.TYPE.LEFT },
                { btn: 'rightBtn', event: Common.BaseEvent.DIR_RIGHT_END, key: Common.KeyEvent.TYPE.RIGHT },
                { btn: 'upBtn', event: Common.BaseEvent.DIR_UP_END, key: Common.KeyEvent.TYPE.UP },
                { btn: 'downBtn', event: Common.BaseEvent.DIR_DOWN_END, key: Common.KeyEvent.TYPE.DOWN },
                { btn: 'superBtn', event: Common.BaseEvent.DIR_SUPER_END, key: Common.KeyEvent.TYPE.SPACE }
            ];
            // 添加监听事件
            _this.keyEvent = new Common.KeyEvent(document, ['keyup', 'keydown']);
            _this.init();
            return _this;
        }
        ControlPanel.prototype.init = function () {
            this.skinName = 'resource/custom_skins/controlPanel.exml';
            this.width = egret.MainContext.instance.stage.stageWidth;
            this.height = egret.MainContext.instance.stage.stageHeight;
            this.addEventListener(eui.UIEvent.COMPLETE, this.bindEventListener, this);
        };
        ControlPanel.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        ControlPanel.prototype.bindEventListener = function () {
            var _this = this;
            this.startEventList.forEach(function (e) {
                _this[e.btn].addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (event) {
                    Common.GlobalDispatch.dispatchEvent(e.event);
                }, _this);
                _this.keyEvent.registerListener('keydown', e.key, function (event) {
                    Common.GlobalDispatch.dispatchEvent(e.event);
                });
            });
            this.endEventList.forEach(function (e) {
                _this[e.btn].addEventListener(egret.TouchEvent.TOUCH_END, function (event) {
                    Common.GlobalDispatch.dispatchEvent(e.event);
                }, _this);
                _this.keyEvent.registerListener('keyup', e.key, function (event) {
                    Common.GlobalDispatch.dispatchEvent(e.event);
                });
            });
        };
        return ControlPanel;
    }(eui.Component));
    Views.ControlPanel = ControlPanel;
    __reflect(ControlPanel.prototype, "Views.ControlPanel");
})(Views || (Views = {}));
