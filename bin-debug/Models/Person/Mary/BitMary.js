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
                    _this.textures = [];
                    _this.initMary();
                    return _this;
                }
                BitMary.prototype.initMary = function () {
                    this.setSize();
                    this.movieClip = this.rightMovieClip;
                    this.addChild(this.movieClip);
                };
                BitMary.prototype.setSize = function () {
                    this.width = 32;
                    this.height = 64;
                };
                BitMary.prototype.initAllMovieClip = function () {
                    this.leftMovieClip = null;
                    this.rightMovieClip = this.getMovieClipData(RES.getRes('mary_person_json'), RES.getRes('mary_person_png'), 'mary_person_right');
                };
                /**
                 * 向左走
                 */
                BitMary.prototype.walkLeft = function () {
                };
                /**
                 * 向右走
                 */
                BitMary.prototype.walkRight = function () {
                    this.setRightMovieClip();
                    _super.prototype.walkRight.call(this);
                };
                /**
                 * 向左跑
                 */
                BitMary.prototype.runLeft = function () {
                };
                /**
                 * 向右跑
                 */
                BitMary.prototype.runRight = function () {
                };
                /**
                 * 跳
                 */
                BitMary.prototype.jump = function () {
                };
                /**
                 * 向下钻
                 */
                BitMary.prototype.toDrill = function () {
                };
                /**
                 * 停止
                 */
                BitMary.prototype.stopClip = function () {
                    console.log('-------- stop');
                    _super.prototype.stopClip.call(this);
                };
                return BitMary;
            }(Mary.BaseMary));
            Mary.BitMary = BitMary;
            __reflect(BitMary.prototype, "Models.Person.Mary.BitMary", ["Models.Person.Mary.IMary"]);
        })(Mary = Person.Mary || (Person.Mary = {}));
    })(Person = Models.Person || (Models.Person = {}));
})(Models || (Models = {}));
