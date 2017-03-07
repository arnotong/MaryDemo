var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Controller;
(function (Controller) {
    var PersonControll = (function () {
        function PersonControll(person, map) {
            this.dispatchEvent = new egret.EventDispatcher();
            this.person = null;
            this.map = null;
            this.listenerEventTable = [
                { event: Common.BaseEvent.DIR_LEFT, handle: this.listenerWalkLeft },
                { event: Common.BaseEvent.DIR_RIGHT, handle: this.listenerWalkRight },
                { event: Common.BaseEvent.DIR_UP, handle: this.listenerWalkUp },
                { event: Common.BaseEvent.DIR_DOWN, handle: this.listenerWalkDown },
                { event: Common.BaseEvent.DIR_SUPER, handle: this.listenerSuper },
                { event: [Common.BaseEvent.DIR_DOWN_END, Common.BaseEvent.DIR_LEFT_END, Common.BaseEvent.DIR_RIGHT_END, Common.BaseEvent.DIR_UP_END, Common.BaseEvent.DIR_SUPER_END], handle: this.stopMovie }
            ];
            this.person = person;
            this.map = map;
            this.listenerEvent();
        }
        PersonControll.prototype.listenerEvent = function () {
            var _this = this;
            this.listenerEventTable.forEach(function (e) {
                if (Array.isArray(e.event)) {
                    e.event.forEach(function (ee) {
                        Common.GlobalDispatch.addEventListener(ee, e.handle, _this);
                    });
                }
                else {
                    Common.GlobalDispatch.addEventListener(e.event, e.handle, _this);
                }
            });
        };
        PersonControll.prototype.listenerWalkRight = function () {
            this.person.walkRight();
        };
        PersonControll.prototype.listenerWalkLeft = function () {
        };
        PersonControll.prototype.listenerWalkUp = function () {
        };
        PersonControll.prototype.listenerWalkDown = function () {
        };
        PersonControll.prototype.listenerSuper = function () {
        };
        PersonControll.prototype.stopMovie = function () {
            this.person.stopClip();
        };
        return PersonControll;
    }());
    Controller.PersonControll = PersonControll;
    __reflect(PersonControll.prototype, "Controller.PersonControll");
})(Controller || (Controller = {}));
