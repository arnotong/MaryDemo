var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LoadTexture = (function () {
    function LoadTexture(url, func) {
        this.callback = null;
        this.url = null;
        this.loader = null;
        this.bitmapData = null;
        this.texture = null;
        this.bitmap = null;
        this.url = url;
        this.callback = func;
        if (!this.url)
            return;
        this.startLoad();
    }
    LoadTexture.prototype.startLoad = function () {
        this.loader = new egret.ImageLoader();
        this.loader.addEventListener(egret.Event.COMPLETE, this.loadComplete, this);
        this.loader.load(this.url);
    };
    LoadTexture.prototype.loadComplete = function () {
        this.loadBitmapData();
        this.loadTexture();
        this.loadBitmap();
        this.callback && this.callback(this);
    };
    LoadTexture.prototype.loadBitmapData = function () {
        this.bitmapData = this.loader.data;
    };
    LoadTexture.prototype.loadTexture = function () {
        this.texture = new egret.Texture();
        this.texture.bitmapData = this.bitmapData;
    };
    LoadTexture.prototype.loadBitmap = function () {
        this.bitmap = new egret.Bitmap(this.texture);
    };
    LoadTexture.prototype.getImageLoader = function () {
        return this.loader;
    };
    LoadTexture.prototype.getBitMapData = function () {
        return this.bitmapData;
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
//# sourceMappingURL=LoadTexture.js.map