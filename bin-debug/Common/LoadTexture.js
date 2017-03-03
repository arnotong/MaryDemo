var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LoadTexture = (function () {
    function LoadTexture(name, func) {
        this.callback = null;
        this.name = null;
        this.bitmapData = null;
        this.texture = null;
        this.bitmap = null;
        this.width = 0;
        this.height = 0;
        this.name = name;
        this.callback = func;
        if (!this.name)
            return;
        this.startLoad();
    }
    LoadTexture.prototype.startLoad = function () {
        RES.getResAsync('brick_png', this.loadComplete, this);
    };
    LoadTexture.prototype.loadComplete = function (texture) {
        this.texture = texture;
        this.bitmap = new egret.Bitmap(this.texture);
        this.callback && this.callback(this);
    };
    LoadTexture.prototype.getTexture = function () {
        return this.texture;
    };
    LoadTexture.prototype.getBitmap = function () {
        return this.bitmap;
    };
    return LoadTexture;
}());
__reflect(LoadTexture.prototype, "LoadTexture");
