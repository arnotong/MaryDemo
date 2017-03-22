var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Common;
(function (Common) {
    var Position = (function () {
        function Position(x, y) {
            this.x = 0;
            this.y = 0;
            this.x = x;
            this.y = y;
        }
        return Position;
    }());
    Common.Position = Position;
    __reflect(Position.prototype, "Common.Position");
})(Common || (Common = {}));
//# sourceMappingURL=Position.js.map