var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Models;
(function (Models) {
    var UserData = (function () {
        function UserData(displays, type, pos) {
            if (displays === void 0) { displays = []; }
            if (type === void 0) { type = UserData.TYPE.MOVE_MAP; }
            if (pos === void 0) { pos = new Box2D.Common.Math.b2Vec2(0, 0); }
            this.displays = [];
            this.type = null;
            this.pos = null;
            this.displays = displays;
            this.type = type;
            this.pos = pos;
        }
        UserData.prototype.getDisplays = function () {
            return this.displays;
        };
        UserData.prototype.getType = function () {
            return this.type;
        };
        UserData.prototype.getPos = function () {
            return this.pos;
        };
        UserData.prototype.isType = function (type) {
            return this.type === type;
        };
        return UserData;
    }());
    UserData.TYPE = {
        MOVE_MAP: 'move_map',
        PERSON: 'person'
    };
    Models.UserData = UserData;
    __reflect(UserData.prototype, "Models.UserData");
})(Models || (Models = {}));
//# sourceMappingURL=UserData.js.map