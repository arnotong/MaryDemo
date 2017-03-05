var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BitMary = (function (_super) {
    __extends(BitMary, _super);
    function BitMary() {
        var _this = _super.call(this) || this;
        _this.textures = [];
        _this.initMary();
        return _this;
    }
    BitMary.prototype.initMary = function () {
        this.setSize();
        this.loadTexture();
        this.setTexture();
    };
    BitMary.prototype.setSize = function () {
        this.width = 32;
        this.height = 64;
    };
    BitMary.prototype.loadTexture = function () {
        var _this = this;
        var keys = ['mary_1_png', 'mary_2_png', 'mary_3_png', 'mary_4_png', 'mary_5_png'];
        keys.forEach(function (key) {
            _this.textures.push(new TextureBitmap('mary_person_json.' + key).getBitmap());
        });
    };
    BitMary.prototype.setTexture = function () {
        this.addChild(this.textures[0]);
    };
    return BitMary;
}(egret.DisplayObjectContainer));
__reflect(BitMary.prototype, "BitMary");
