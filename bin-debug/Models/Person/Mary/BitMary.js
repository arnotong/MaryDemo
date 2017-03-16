var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Models;
(function (Models) {
    var Person;
    (function (Person) {
        var Mary;
        (function (Mary) {
            var BitMary = (function (_super) {
                __extends(BitMary, _super);
                function BitMary() {
                    var _this = _super.call(this) || this;
                    _this.initMary();
                    return _this;
                }
                BitMary.prototype.initMary = function () {
                    this.setSize();
                };
                BitMary.prototype.setSize = function () {
                    this.width = 32;
                    this.height = 64;
                };
                /**
                 * 重写
                 * 初始化 全部的 movieClip
                 */
                BitMary.prototype.initAllMovieClip = function () {
                    this.leftMovieClip = this.getMovieClipData(RES.getRes('mary_big_left_json'), RES.getRes('mary_big_left_png'), 'mary_big_left');
                    this.rightMovieClip = this.getMovieClipData(RES.getRes('mary_big_right_json'), RES.getRes('mary_big_right_png'), 'mary_big_right');
                };
                return BitMary;
            }(Mary.BaseMary));
            Mary.BitMary = BitMary;
            __reflect(BitMary.prototype, "Models.Person.Mary.BitMary", ["Models.Person.Mary.IMary"]);
        })(Mary = Person.Mary || (Person.Mary = {}));
    })(Person = Models.Person || (Models.Person = {}));
})(Models || (Models = {}));
