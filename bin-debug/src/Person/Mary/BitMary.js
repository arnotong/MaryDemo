var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person;
(function (Person) {
    var Mary;
    (function (Mary) {
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
                    _this.textures.push(new Common.TextureBitmap('mary_person_json.' + key).getBitmap());
                });
            };
            BitMary.prototype.setTexture = function () {
                var factory = new egret.MovieClipDataFactory(RES.getRes('mary_person_json'), RES.getRes('mary_person_png'));
                var sp = new egret.MovieClip(factory.generateMovieClipData('mary_person'));
                sp.gotoAndPlay(1, -1);
                this.addChild(sp);
            };
            BitMary.prototype.getHeight = function () {
                return this.height;
            };
            return BitMary;
        }(Person.Mary.BaseMary));
        Mary.BitMary = BitMary;
        __reflect(BitMary.prototype, "Person.Mary.BitMary");
    })(Mary = Person.Mary || (Person.Mary = {}));
})(Person || (Person = {}));
//# sourceMappingURL=BitMary.js.map