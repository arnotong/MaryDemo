var RateCenter = (function (_super) {
    __extends(RateCenter, _super);
    function RateCenter(flag) {
        _super.call(this);
        this.isEnable = false;
        this.label = null;
        this.isEnable = flag;
    }
    var d = __define,c=RateCenter,p=c.prototype;
    p.showRate = function () {
        if (!this.isEnable)
            return;
        this.label = new egret.TextField();
        this.label.text = String(this.$parent.$stage.frameRate);
        this.label.x = this.$parent.$stage.stageWidth - this.label.width;
        this.label.y = 10;
        this.addChild(this.label);
        this.addEventListener(egret.Event.ENTER_FRAME, this.updateRate, this);
    };
    p.updateRate = function () {
        this.label.text = String(this.$parent.$stage.frameRate);
    };
    return RateCenter;
}(egret.Sprite));
egret.registerClass(RateCenter,'RateCenter');
//# sourceMappingURL=Rate.js.map