var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Controller;
(function (Controller) {
    var PersonControll = (function () {
        function PersonControll(person, map, assembly) {
            this.dispatchEvent = new egret.EventDispatcher();
            this.person = null;
            this.map = null;
            this.assembly = null;
            // 事件列表
            this.listenerEventTable = [
                { event: Common.BaseEvent.DIR_LEFT, handle: this.walkLeft },
                { event: Common.BaseEvent.DIR_RIGHT, handle: this.walkRight },
                { event: Common.BaseEvent.DIR_UP, handle: this.walkUp },
                { event: Common.BaseEvent.DIR_DOWN, handle: this.walkDown },
                { event: Common.BaseEvent.DIR_SUPER, handle: this.walkSuper },
                { event: Common.BaseEvent.DIR_LEFT_END, handle: this.walkLeftStop },
                { event: Common.BaseEvent.DIR_RIGHT_END, handle: this.walkRightStop },
                { event: Common.BaseEvent.DIR_UP_END, handle: this.walkUpStop },
                { event: Common.BaseEvent.DIR_DOWN_END, handle: this.walkDownStop },
                { event: Common.BaseEvent.DIR_SUPER_END, handle: this.walkSuperStop }
            ];
            // ticks 对象
            this.ticks = {
                left: new Common.BaseTick(),
                right: new Common.BaseTick(),
                up: new Common.BaseTick(),
                down: new Common.BaseTick()
            };
            this.count = 0;
            this.person = person;
            this.map = map;
            this.assembly = assembly;
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
        PersonControll.prototype.walkLeft = function (event) {
            var _this = this;
            this.ticks.left.startTick(function (_) {
                _this.person.left(_this.formatEvent(event));
                _this.moveMapForPerson();
            });
        };
        PersonControll.prototype.walkRight = function (event) {
            var _this = this;
            this.ticks.right.startTick(function (_) {
                _this.person.right(_this.formatEvent(event));
                _this.moveMapForPerson();
            });
        };
        PersonControll.prototype.walkUp = function (event) {
        };
        PersonControll.prototype.walkDown = function (event) {
        };
        PersonControll.prototype.walkSuper = function (event) {
        };
        PersonControll.prototype.walkLeftStop = function (event) {
            this.person.stopLeft();
            this.ticks.left.stopTick();
        };
        PersonControll.prototype.walkRightStop = function (event) {
            this.person.stopRight();
            this.ticks.right.stopTick();
        };
        PersonControll.prototype.walkUpStop = function (event) {
        };
        PersonControll.prototype.walkDownStop = function (event) {
        };
        PersonControll.prototype.walkSuperStop = function (event) {
        };
        PersonControll.prototype.formatEvent = function (event) {
            event['eventTypeName'] = Common.BaseEvent.getEvent(event.type);
            return event;
        };
        /**
         * 根据 人物 移动来移动地图
         */
        PersonControll.prototype.moveMapForPerson = function () {
            this.moveStaticBody(Common.B2Box.world.GetBodyList(), this.person.getPos());
            // let x = pos.x
            // let y = egret.MainContext.instance.stage.x
            // egret.MainContext.instance.stage.x = -pos.x
        };
        /**
         * 移动 地图 上 所有静态 物品
         */
        PersonControll.prototype.moveStaticBody = function (body, personPos) {
            if (body) {
                if (body.GetPosition) {
                    var userData = (body.GetUserData() || new Models.UserData());
                    console.log(userData.getType());
                    if (userData.isType(Models.UserData.TYPE.MOVE_MAP)) {
                        var pos = userData.getPos();
                        var bodyPos = body.GetPosition();
                        bodyPos.x = pos.x + personPos.x;
                        body.SetPosition(bodyPos);
                    }
                }
                this.moveStaticBody(body.GetNext(), personPos);
            }
        };
        return PersonControll;
    }());
    Controller.PersonControll = PersonControll;
    __reflect(PersonControll.prototype, "Controller.PersonControll");
})(Controller || (Controller = {}));
//# sourceMappingURL=PersonControll.js.map