var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Common;
(function (Common) {
    var GlobalWorld = (function () {
        function GlobalWorld() {
        }
        return GlobalWorld;
    }());
    GlobalWorld.world = new p2.World({
        gravity: [0, -9.8 * 100]
    });
    Common.GlobalWorld = GlobalWorld;
    __reflect(GlobalWorld.prototype, "Common.GlobalWorld");
})(Common || (Common = {}));
