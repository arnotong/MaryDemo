class RateCenter extends egret.Sprite {
    private isEnable = false
    private label:egret.TextField = null

    public constructor (flag) {
        super()

        this.isEnable = flag
    }

    public showRate():void {
        if (!this.isEnable) return

        this.label = new egret.TextField()
        this.label.text = String(this.$parent.$stage.frameRate)
        this.label.x = this.$parent.$stage.stageWidth - this.label.width
        this.label.y = 10
        this.addChild(this.label)

        this.addEventListener(egret.Event.ENTER_FRAME, this.updateRate, this)
    }

    private updateRate():void {
        this.label.text = String(this.$parent.$stage.frameRate)
    }
}